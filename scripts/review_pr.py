import anthropic
import os
import subprocess

SYSTEM = """You review pull requests for a bilingual (Icelandic/English) portfolio website belonging to Sindri Már Hilmarsson, a mechanical engineering student in Reykjavík transitioning into applied AI.

PRs come from an external writing agent. Your job is to check copy changes against the writing style guide and give concise, actionable feedback. Be direct and specific — no padding.

Focus on:
- Adherence to the writing style guide rules
- IS/EN content consistency: the two languages should make the same claims, not different ones
- Honesty about project status (no over-claiming scale, maturity, or team size)
- Voice: direct, first-person, concrete — not corporate or AI-flavoured

Format:
- One-line overall verdict first
- Issues (if any): each as a bullet with file location and what to fix
- Brief "what worked" note at the end

If the diff is clean, say so in 2–3 sentences. Don't manufacture critique."""


def main():
    client = anthropic.Anthropic()

    with open("pr.diff") as f:
        diff = f.read()

    try:
        with open("docs/WRITING_STYLE.md") as f:
            style_guide = f.read()
    except FileNotFoundError:
        style_guide = "(WRITING_STYLE.md not found)"

    pr_title = os.environ.get("PR_TITLE", "")
    pr_body = os.environ.get("PR_BODY", "")

    response = client.messages.create(
        model="claude-sonnet-4-6",
        max_tokens=1024,
        system=SYSTEM,
        messages=[
            {
                "role": "user",
                "content": f"**PR:** {pr_title}\n**Description:** {pr_body}\n\n**Writing Style Guide:**\n{style_guide}\n\n**Diff:**\n```diff\n{diff}\n```",
            }
        ],
    )

    review = response.content[0].text
    pr_number = os.environ["PR_NUMBER"]

    subprocess.run(
        [
            "gh", "pr", "review", pr_number,
            "--comment",
            "--body", f"## Auto-review\n\n{review}\n\n---\n*Posted by Claude via GitHub Actions*",
        ],
        check=True,
    )


if __name__ == "__main__":
    main()
