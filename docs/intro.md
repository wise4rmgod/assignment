---
sidebar_position: 1
tags:
  - test
---

# AI Prompt

You are a senior technical writer. Write a clear, concise, and structured "How-To Guide" for a junior to mid-level developer.

Goal:
Guide the developer through onboarding a new user to a Canton Participant Node using three REST API endpoints.

Use a practical, instructional tone. Follow a Google-style developer documentation approach: simple language, clear flow, minimal fluff, and strong structure.

Include the following sections:

1. Conceptual Introduction
- Explain the mental model behind the workflow.
- Clearly justify why the steps must happen in this order.

2. Prerequisites
- List what the developer needs before starting.
- Briefly explain why each prerequisite is required.

3. Workflow (numbered steps)
- Step 1: Allocate a new Party
- Step 2: Submit a command (exercise a choice on a smart contract)
- Step 3: Query active contracts
- Each step must include:
  - What the step does (1–2 lines)
  - Example request (JSON)
  - Example response (JSON)
  - Key parameters explained briefly

4. Verification & Troubleshooting
- Add a “Verify success” step after the workflow
- Include 3–5 common errors and how to fix them
- Focus on preventing support tickets

Constraints:
- Be concise but complete
- Avoid vague explanations
- Do not assume prior knowledge of Canton or Daml
- Keep explanations practical, not theoretical
- Use consistent terminology (Party ID, JWT, contracts, etc.)

Raw Materials:

Endpoint 1: POST /v2/parties/allocate
- Allocates a new Party (user identity)
- Requires: party_hint (string)
- Returns: globally unique Party ID

Endpoint 2: POST /v2/commands/submitUntilTimeout
- Submits a signed transaction under a Party ID
- Requires:
  - Party ID
  - Signed transaction
  - Timeout in seconds

Endpoint 3: POST /v2/state/active-contracts
- Returns active contracts visible to a Party
- Requires:
  - Party ID
  - JWT token with proper authorization

Output format:
- Use clear headings
- Use code blocks for requests/responses
- Keep it readable and skimmable


## What it did well:

1. It provided clear sample request and response examples that help users understand how the API behaves in practice. This makes it easier to validate inputs and outputs while testing.
2. The introduction was strong and to the point, giving a quick understanding of what the guide is about without unnecessary detail.
3. The prerequisites section was well structured and useful, clearly outlining what users need before starting the tutorial.
4. The step-by-step instructions were clear and easy to follow, helping users progress through the workflow in a logical order.
5. Overall, the content was solid and technically accurate, but it wasn’t fully beginner-friendly in some areas, especially where assumptions were made.
6. Some sections were not linked to the official documentation, which made it harder for users to verify details or explore deeper explanations when needed.

## What I changed:

1. I researched the official documentation and added accurate links to improve trust and ensure users can reference authoritative sources when needed. This also helped reduce ambiguity in technical sections.
2. I revised the content to align with the Google Developer Documentation Style Guide, improving consistency, tone, and readability across the guide.
3. I rewrote the prerequisites section to make it clearer and more structured, ensuring each requirement is easy to understand and why it is needed is more obvious.
4. I added Mermaid.js diagrams to visually represent the workflow, making complex steps easier to understand at a glance rather than relying only on text.
5. I included an interactive API documentation and playground so users can test requests in real time, which improves learning through hands-on experience.
6. I added relevant links throughout the guide where necessary to reduce long explanations and allow users to quickly jump to more detailed official resources when needed.
7. I also modified the AI-generated content to better reflect my own voice and writing style. I reviewed the entire guide for clarity, consistency, and flow, refining sections where explanations were unclear or too generic, and ensuring the final output was easy to follow and more aligned with a human-authored technical documentation style.