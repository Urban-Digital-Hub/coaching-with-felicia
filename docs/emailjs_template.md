# Sample EmailJS Template

Template ID: `your_template_id`

Suggested template subject:

New contact from {{user_name}} — {{subject}}

Suggested template body (HTML or plain text):

Hello,

You have a new message from {{user_name}} ({{user_email}}):

Subject: {{subject}}

Message:
{{message}}

Reply to: {{user_email}}
To: {{to_email}}

---

Notes:
- Make sure the template has the corresponding variables (e.g. `user_name`, `user_email`, `subject`, `message`, `to_email`).
- In EmailJS dashboard, set the template to send to the destination (you can also use the `to_email` template variable in the template or configure the receiver from the dashboard).
- After creating the service and template in EmailJS, copy the `service_id`, `template_id`, and `public_key` into your project's `.env` (or environment variables) following `.env.example`.
