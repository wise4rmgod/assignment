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
1. It gave me good sample request and response examples
2. The intro was good and on point
3. The prerequisites too was very good
4. The step by step instruction was good 

## What i changed
1. I made research on the official docs to get accurate links to back some sections of the guide
2. I ensure it followed a Google writing style guide by editing the content.
3. I rewrote the prerequisites to follow a good style even though what AI gave me was still good.
4. 