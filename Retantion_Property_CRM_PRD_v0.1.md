# PRD — Retantion Property CRM

**Version:** v0.1  
**Status:** Draft for product, tech, UI/UX, and sales alignment  
**Prepared for:** Retantion Property CRM  
**Date:** 10 May 2026  
**Language:** Bahasa Indonesia  

---

## 1. Executive Summary

**Retantion Property CRM** adalah SaaS CRM untuk agent dan agency properti yang membantu mengelola lead, chat customer, listing, follow-up, viewing, negosiasi, sampai closing dalam satu platform.

Retantion diposisikan sebagai:

> **WhatsApp-first Property CRM dengan Web Chat Widget, AI Sales Copilot, dan Sales Playbook Builder yang bisa mengikuti SOP setiap agency.**

Produk ini tidak dimulai sebagai “AI agent bebas”, tetapi sebagai sistem CRM yang terstruktur, di mana AI membantu agent dan manager untuk bekerja lebih cepat, rapi, dan konsisten.

Core value Retantion:

- Lead tidak tercecer.
- Follow-up lebih disiplin.
- Listing lebih mudah dicocokkan dengan kebutuhan buyer.
- Semua agent bisa mengikuti SOP sales yang sama.
- Agency bisa memakai template siap pakai atau membuat custom flow sendiri.
- AI membantu summary, extraction, matching, dan draft chat, tetapi tetap mengikuti aturan agency.

---

## 2. Product Vision

Retantion menjadi **sales operating system untuk agency properti**, dari lead pertama masuk sampai closing.

Visi produk:

> Membantu agency properti mengubah chat customer menjadi pipeline yang terukur, follow-up yang konsisten, dan closing yang lebih tinggi.

---

## 3. Product Positioning

### 3.1 One-Liner

> Retantion membantu agency properti mengelola lead WhatsApp dan web chat, mencocokkan buyer dengan listing, mengotomasi follow-up, dan memastikan semua agent mengikuti SOP sales yang sama.

### 3.2 Short Pitch

> Mulai dari web chatbot dulu, lanjut ke WhatsApp CRM saat siap. Semua lead, listing, follow-up, dan SOP sales agency Anda masuk dalam satu dashboard yang dibantu AI.

### 3.3 Differentiation

Retantion bukan hanya CRM biasa. Retantion menggabungkan:

1. **CRM properti**
2. **Web Chat Widget / Webview Chatbot**
3. **WhatsApp Business Inbox**
4. **AI Sales Copilot**
5. **Sales Playbook Builder**
6. **Template SOP Library**
7. **Property Matching**
8. **Owner & Manager Dashboard**

---

## 4. Background & Problem Statement

Agency properti dan agent property sering mengalami masalah berikut:

1. Lead masuk dari banyak channel: WhatsApp, website, Instagram, TikTok, referral, iklan, dan manual input.
2. Lead tercecer di chat pribadi agent.
3. Follow-up tidak konsisten.
4. Customer sudah tertarik tetapi tidak segera diajak viewing.
5. Data buyer tidak rapi: budget, area, preferensi, dan timeline sering hilang di chat.
6. Listing tidak mudah dicocokkan dengan kebutuhan buyer.
7. Owner agency sulit melihat performa agent.
8. Tiap agent punya gaya komunikasi berbeda.
9. SOP agency sering hanya verbal dan tidak tertanam di sistem.
10. Integrasi WhatsApp Business API memiliki friction teknis, sehingga agency butuh channel alternatif untuk mencoba dulu.
11. AI tools umum tidak memahami workflow property sales dan SOP masing-masing agency.

---

## 5. Product Principles

1. **CRM database adalah source of truth.**  
   AI hanya membantu membaca, menyarankan, merangkum, dan mencocokkan.

2. **Template first, custom later.**  
   Agency harus bisa langsung jalan dengan template bawaan, lalu customize jika perlu.

3. **Workflow harus terasa seperti SOP sales, bukan automation teknis.**  
   Hindari UX yang terlalu mirip n8n/Zapier pada fase awal.

4. **AI harus mengikuti Sales Playbook agency.**  
   AI tidak boleh bebas membuat gaya komunikasi sendiri.

5. **Human-in-the-loop by default.**  
   Untuk MVP, AI membuat draft dan suggestion; agent tetap approve sebelum pesan dikirim.

6. **Web Chat Widget menjadi channel pertama untuk trial dan embed.**  
   Agency bisa mencoba chatbot tanpa menunggu WhatsApp integration.

7. **WhatsApp integration menggunakan jalur resmi.**  
   Retantion tidak menjadikan QR WhatsApp Web unofficial sebagai fondasi produk.

---

## 6. Target Users

### 6.1 Agency Owner

Kebutuhan:

- Monitor semua lead.
- Melihat performa agent.
- Memastikan SOP dijalankan.
- Mencegah lead hilang.
- Melihat closing rate dan lost reason.
- Mengatur tone, template, dan playbook agency.

### 6.2 Sales Manager / Team Leader

Kebutuhan:

- Assign lead ke agent.
- Cek follow-up.
- Pantau hot prospect.
- Review aktivitas team.
- Escalate lead penting.
- Mengatur rule follow-up dan manager alert.

### 6.3 Property Agent

Kebutuhan:

- Mengelola lead harian.
- Chat customer lebih cepat.
- Mendapat reminder follow-up.
- Mencari listing yang cocok.
- Menjadwalkan viewing.
- Mendapat draft pesan dari AI.
- Melihat next action yang jelas.

### 6.4 Admin Agency

Kebutuhan:

- Manage user.
- Manage listing.
- Import/export data.
- Setup pipeline.
- Setup template chat.
- Setup widget.
- Setup channel integration.

### 6.5 Customer / Buyer

Customer tidak harus login ke dashboard. Customer berinteraksi melalui:

- Web Chat Widget.
- WhatsApp.
- Link listing.
- Viewing confirmation.
- Chat follow-up.

---

## 7. Product Scope Overview

Retantion terdiri dari 5 pilar utama:

| Pilar | Fungsi |
|---|---|
| CRM Core | Manage lead, contact, property, pipeline, task, viewing, dan deal |
| Channel Layer | Web Chat Widget, WhatsApp Business, dan channel lead lainnya |
| AI Sales Copilot | Extract kebutuhan buyer, ringkas chat, buat follow-up, cocokkan listing |
| Sales Playbook Builder | Template SOP + custom workflow per agency |
| Analytics & Reporting | Dashboard owner, manager, agent, dan AI usage |

---

## 8. High-Level System Flow

```text
Lead masuk dari Web Chat / WhatsApp / IG / TikTok / manual input
↓
Sistem membuat contact dan lead
↓
AI membaca pesan dan extract kebutuhan buyer
↓
Lead masuk pipeline
↓
Agent menerima task atau notifikasi
↓
Agent qualification customer
↓
AI bantu rekomendasi listing
↓
Agent kirim listing ke customer
↓
Sistem membuat reminder follow-up
↓
Customer diajak viewing
↓
Viewing dijadwalkan
↓
Agent follow-up hasil viewing
↓
Negosiasi
↓
Closed / Lost
↓
Dashboard owner terupdate
```

---

## 9. Core Modules

---

# 9.1 Tenant & Agency Management

## Purpose

Mengelola workspace agency sebagai tenant terpisah.

## Features

- Create agency workspace.
- Manage agency profile.
- Manage logo dan branding.
- Manage subscription plan.
- Manage default language.
- Manage timezone.
- Manage business settings.
- Manage channel settings.

## Agency Data

- Agency name
- Logo
- Business type
- Default tone
- Main area coverage
- Default currency
- Website domain
- WhatsApp configuration
- Active Sales Playbook
- Subscription plan

## Acceptance Criteria

- Setiap agency memiliki tenant ID.
- Semua lead, user, listing, playbook, dan message harus terikat ke tenant.
- User dari tenant lain tidak boleh melihat data tenant lain.
- Owner bisa mengubah profile agency.

---

# 9.2 User & Role Management

## Roles

| Role | Description |
|---|---|
| Owner | Full access |
| Manager | Manage team, lead, report, dan sebagian playbook |
| Agent | Manage assigned lead dan conversation |
| Admin | Manage setting, listing, template, channel |
| Viewer | View report only |

## Permission Examples

- Can edit playbook
- Can publish playbook
- Can approve AI message
- Can assign lead
- Can view all leads
- Can export data
- Can manage billing
- Can manage channel integration
- Can manage widget

## Acceptance Criteria

- Owner bisa invite user.
- Owner/Admin bisa assign role.
- Agent hanya melihat lead yang assigned, kecuali diberikan permission lebih tinggi.
- Perubahan permission tercatat di audit log.

---

# 9.3 Lead & Contact Management

## Purpose

Menjadi pusat data buyer/seller/customer.

## Features

- Auto-create lead dari Web Chat.
- Auto-create lead dari WhatsApp webhook.
- Manual input lead.
- Import lead dari CSV/Excel.
- Lead source tracking.
- Lead owner / assigned agent.
- Lead status.
- Lead priority.
- Lead temperature: Cold / Warm / Hot.
- Lost reason.
- Next follow-up date.
- Activity timeline.

## Lead Fields

- Customer name
- Phone number
- Email
- Source
- Assigned agent
- Budget min/max
- Area interest
- Property type
- Bedroom preference
- Bathroom preference
- Payment method
- Purchase timeline
- Buying purpose
- Notes
- Last activity
- Next follow-up date
- Pipeline stage
- Lead temperature

## Acceptance Criteria

- Lead bisa dibuat manual.
- Lead bisa dibuat otomatis dari Web Chat.
- Lead bisa dibuat otomatis dari WhatsApp.
- Lead memiliki timeline activity.
- Lead bisa dipindahkan antar stage pipeline.
- Lead bisa diassign ke agent.
- AI bisa mengisi buyer preference berdasarkan chat, dengan status confidence.

---

# 9.4 Sales Pipeline

## Default Pipeline

```text
New Lead
↓
Qualified
↓
Listing Sent
↓
Viewing Scheduled
↓
Viewing Completed
↓
Negotiation
↓
Booking / DP
↓
Closed Won / Closed Lost
```

## Features

- Kanban view.
- List view.
- Drag and drop stage.
- Custom stage per agency.
- Required fields per stage.
- Auto reminder per stage.
- Manager alert per stage.
- Stage definition.

## Stage Setting Example

```text
Stage Name:
Hot Prospect

Definition:
Buyer sudah cocok budget dan area, serta tertarik viewing.

Required Data:
- Budget
- Area
- Property type
- WhatsApp number

Auto Reminder:
Jika tidak ada aktivitas 12 jam, ingatkan agent.

Manager Alert:
Jika lead hot tidak disentuh 24 jam, notify manager.
```

## Acceptance Criteria

- Agency bisa memakai pipeline template.
- Agency bisa rename stage.
- Agency bisa reorder stage.
- Agency bisa set required field per stage.
- Sistem bisa membuat task otomatis berdasarkan stage rule.

---

# 9.5 Property Listing Management

## Purpose

Mengelola listing properti yang akan dicocokkan dengan kebutuhan buyer.

## Features

- Add property listing.
- Import listing dari Excel.
- Upload photos.
- Manage price.
- Manage availability.
- Manage property status.
- Add owner/internal notes.
- Add public description.
- Add selling points.
- Share listing to customer.
- Generate listing card/link.

## Property Fields

- Property title
- Property type
- Location
- Area
- City
- Price
- Land size
- Building size
- Bedrooms
- Bathrooms
- Certificate/legal status
- Facilities
- Nearby places
- Availability
- Photos
- Agent notes
- Public description
- Selling points
- Owner name/contact, optional
- Commission notes, optional

## Acceptance Criteria

- Admin/Agent bisa create listing.
- Listing bisa di-filter berdasarkan price, area, type, bedroom.
- Listing bisa di-share ke customer.
- Listing bisa dipakai untuk AI matching.
- Availability harus jelas agar AI tidak menyarankan unit yang unavailable.

---

# 9.6 Unified Inbox

## Purpose

Menyatukan semua chat dari Web Chat Widget dan WhatsApp dalam satu inbox.

## Supported Channels

- Web Chat Widget
- WhatsApp Business
- Future: Instagram DM/Lead Form
- Future: TikTok Lead Form
- Future: Manual lead

## Inbox Layout

```text
Left Panel:
Conversation list

Center Panel:
Chat thread

Right Panel:
Lead profile
AI summary
Buyer preferences
Recommended next action
Recommended listing
```

## Features

- Conversation list by channel.
- Customer profile sidebar.
- Lead status sidebar.
- AI summary sidebar.
- Suggested reply.
- Template message.
- Activity history.
- Assign conversation to agent.
- Mark unread/important.
- Filter by channel.
- Filter by agent.
- Filter by overdue response.

## Acceptance Criteria

- Semua web chat masuk inbox.
- Semua WhatsApp message masuk inbox setelah integration aktif.
- Agent bisa membalas dari inbox, sesuai channel capability.
- AI suggestion muncul di sidebar.
- Conversation harus terhubung ke lead/contact.

---

# 10. Web Chat Widget / Webview Chatbot

## 10.1 Purpose

Web Chat Widget adalah chatbot yang bisa:

1. Dipakai di CMS untuk simulasi.
2. Di-embed oleh agency ke website mereka.
3. Menjadi lead capture sebelum WhatsApp integration selesai.
4. Mengikuti Sales Playbook agency.
5. Masuk ke Unified Inbox dan CRM.

## 10.2 Strategic Reason

Web chatbot membuat agency bisa mencoba Retantion tanpa friction WhatsApp setup.

Adoption flow:

```text
Agency daftar Retantion
↓
Pilih Sales Playbook template
↓
Test chatbot di CMS
↓
Embed Web Chat Widget ke website
↓
Mulai capture lead
↓
Connect WhatsApp Business saat siap
```

## 10.3 Customer Flow

```text
Customer buka website agency
↓
Widget muncul
↓
Customer klik chat
↓
Bot tanya kebutuhan
↓
AI extract budget, area, tipe properti
↓
Sistem buat lead
↓
AI rekomendasikan listing
↓
Jika customer tertarik:
   - jadwalkan viewing
   - handover ke agent
   - arahkan ke WhatsApp
↓
Lead masuk CRM + Inbox
```

## 10.4 Widget CMS Settings

Agency bisa mengatur:

- Widget name
- Website domain
- Allowed domain
- Brand color
- Logo
- Bot avatar
- Greeting message
- Bot name
- Lead capture timing
- Sales Playbook
- Agent handover rule
- Operating hours
- Fallback message
- WhatsApp handoff button
- Embed code

## 10.5 Branding Settings

- Logo agency
- Primary color
- Widget position: bottom right / bottom left
- Bot avatar
- Welcome message
- Button text

Example welcome message:

```text
Hi, cari rumah di BSD, Jakarta, atau Gading Serpong? Saya bantu carikan.
```

## 10.6 Lead Capture Strategy

Options:

1. Minta nama & nomor HP di awal.
2. Tanya kebutuhan dulu, lalu minta nomor HP.
3. Minta nomor HP hanya ketika customer mau viewing.

Default recommendation:

```text
Tanya kebutuhan dulu → kasih value → baru minta nomor HP.
```

## 10.7 Agent Handover Rules

Examples:

```text
Jika customer minta bicara dengan agent
→ assign ke agent

Jika customer pilih listing
→ create task untuk agent

Jika customer ingin viewing
→ minta nomor HP dan jadwal

Jika bot confidence rendah
→ handover ke agent
```

## 10.8 Embed Code

Script embed example:

```html
<script src="https://cdn.retantion.com/widget.js"
        data-widget-id="agency_abc_widget_001">
</script>
```

Iframe alternative:

```html
<iframe
  src="https://chat.retantion.com/widget/agency_abc_widget_001"
  width="100%"
  height="600">
</iframe>
```

Recommended production approach:

- Use script widget for floating bubble, styling, event tracking, and domain control.
- Support iframe for simple embed fallback.

## 10.9 Acceptance Criteria

- Agency bisa create widget.
- Agency bisa customize widget.
- Agency bisa copy embed code.
- Widget hanya aktif di allowed domain.
- Chat dari widget masuk ke Unified Inbox.
- Chat dari widget otomatis membuat lead/contact.
- AI extraction berjalan dari web chat.
- Widget mengikuti active Sales Playbook.
- User bisa test chatbot di CMS sebelum publish.

---

# 11. WhatsApp Business Integration

## 11.1 Purpose

Menyediakan WhatsApp Business connection agar agency bisa menerima dan membalas chat customer dari Retantion.

## 11.2 Product Direction

Retantion harus menggunakan jalur resmi WhatsApp Business Platform / Cloud API.

Retantion tidak disarankan membangun produk dengan model QR WhatsApp Web unofficial sebagai fondasi, karena berisiko dari sisi stabilitas, compliance, dan scalability.

## 11.3 Supported Setup Options

### Option 1 — Use Web Chat First

Untuk agency yang belum siap connect WhatsApp.

CTA:

```text
Create Web Chat Widget
```

### Option 2 — Connect Existing WhatsApp Business App

Untuk agency yang sudah memakai WhatsApp Business App dan ingin memakai nomor yang sama jika eligible.

Product wording:

```text
Connect your existing WhatsApp Business App via official Meta Embedded Signup.
```

Important note:

- Ketersediaan bergantung eligibility Meta.
- Nomor dan akun harus memenuhi ketentuan Meta.
- Product UI tidak boleh menjanjikan “cukup scan QR” sebagai metode resmi.

### Option 3 — Register New WhatsApp Business API Number

Untuk agency yang ingin memakai nomor khusus CRM/automation.

## 11.4 WhatsApp Setup Wizard

```text
Step 1: Choose WhatsApp setup type
- Existing WhatsApp Business App
- New API number

Step 2: Login with Meta

Step 3: Select Business Portfolio

Step 4: Select WhatsApp Business Account

Step 5: Connect phone number

Step 6: Set display name

Step 7: Verify connection

Step 8: Setup default reply/playbook

Step 9: Test inbound message

Step 10: Go live
```

## 11.5 UX Requirement

UI utama harus menyembunyikan istilah teknis seperti:

- WABA ID
- Phone Number ID
- Webhook verify token
- Access token

Istilah teknis boleh ditampilkan di **Advanced Settings**.

## 11.6 WhatsApp Backend Data

Tables/entities:

```text
whatsapp_accounts
whatsapp_phone_numbers
whatsapp_webhooks
whatsapp_message_templates
whatsapp_conversations
whatsapp_contacts
channel_credentials
```

Important fields:

```text
tenant_id
waba_id
phone_number_id
display_phone_number
business_id
access_token_encrypted
webhook_verify_token
status
connected_at
last_sync_at
```

## 11.7 WhatsApp Webhook Flow

```text
WhatsApp message masuk
↓
Meta webhook ke Retantion
↓
Verify signature
↓
Save raw event
↓
Create/update contact
↓
Create/update conversation
↓
Queue AI extraction
↓
Update lead summary
↓
Notify assigned agent
```

## 11.8 Web Chat to WhatsApp Handoff

Di web chatbot, ketika customer sudah qualified:

```text
“Mau lanjut via WhatsApp dengan agent kami?”
[Chat via WhatsApp]
```

Click action:

```text
wa.me/{{agency_phone}}?text=Halo,%20saya%20tertarik%20dengan%20rumah%20di%20BSD
```

Jika WhatsApp API sudah connected:

- Sistem menghubungkan Web Lead → WhatsApp Conversation.
- Conversation history tetap tercatat dalam lead timeline.

Jika belum connected:

- Minimal redirect ke WhatsApp manual.
- Lead tetap tercatat dari web chat.

## 11.9 Acceptance Criteria

- Agency bisa membuka WhatsApp integration wizard.
- Agency bisa memilih setup type.
- Retantion mendukung official Meta Embedded Signup.
- Incoming WhatsApp message masuk ke Unified Inbox.
- Chat terhubung dengan lead/contact.
- AI extraction berjalan dari WhatsApp conversation.
- Sistem bisa fallback ke Web Chat Widget jika WhatsApp belum connected.

---

# 12. Sales Playbook Builder

## 12.1 Purpose

Sales Playbook Builder memungkinkan agency:

- Memakai SOP template bawaan Retantion.
- Customize pipeline.
- Customize follow-up rules.
- Customize template chat.
- Customize AI tone.
- Customize approval rules.
- Customize escalation rules.
- Test flow sebelum publish.

Konsep:

> User tidak perlu membuat automation dari nol. Retantion menyediakan template siap pakai. Agency bisa langsung pakai, edit sedikit, atau buat sendiri.

## 12.2 Feature Name

Recommended name:

> **Sales Playbook**

Avoid primary label:

> Flow Customizer

Karena “Sales Playbook” terdengar lebih bisnis dan lebih mudah dipahami owner agency.

## 12.3 Sales Playbook Menu

```text
Sales Playbook
├── Template Library
├── Active Playbook
├── Pipeline Stages
├── Follow-up Rules
├── Message Templates
├── AI Behavior
├── Approval Rules
├── Escalation Rules
├── Simulation
└── Version History
```

## 12.4 Playbook Template Library

Retantion harus menyediakan template awal:

1. Standard Property Agency
2. Luxury Property Sales
3. High-Volume Instagram/TikTok Leads
4. Developer Project Sales
5. Rental Property Flow
6. Investment Property Flow
7. Syariah-Friendly Property Sales
8. First Home Buyer Flow

Setiap template berisi:

- Pipeline stages
- Qualification questions
- Follow-up rules
- Message templates
- AI tone
- Approval settings
- Escalation rules
- Lost reason categories

## 12.5 Template: Standard Property Agency

Pipeline:

```text
New Lead
Qualified
Listing Sent
Viewing Scheduled
Viewing Completed
Negotiation
Closed Won
Closed Lost
```

Tone:

```text
Friendly
Professional
Helpful
Address customer as "Kak"
Short message
Minimal emoji
```

Follow-up rules:

```text
New lead not contacted after 2 hours → remind agent
Listing sent with no reply after 24 hours → create follow-up task
Viewing completed with no update after 24 hours → remind agent
Hot lead idle after 12 hours → notify manager
```

Approval:

```text
AI can draft messages
Agent must approve before sending
AI cannot promise discount
AI cannot confirm availability without checking listing status
```

## 12.6 Template: Luxury Property Sales

Tone:

```text
Formal
Calm
Premium
Low-pressure
Consultative
```

Flow:

```text
Greeting formal
↓
Qualification halus
↓
Curated listing maksimal 3 unit
↓
Private viewing invitation
↓
Post-viewing feedback
↓
Negotiation
↓
Closing support
```

Message style:

- Tidak terlalu banyak emoji.
- Tidak terlalu agresif.
- Fokus value, privacy, dan convenience.

## 12.7 Template: High-Volume IG/TikTok Leads

Tone:

```text
Fast response
Friendly
Direct
CTA-oriented
```

Flow:

```text
Lead masuk
↓
Auto qualification
↓
Minta budget dan area
↓
Kirim listing cepat
↓
Follow-up 2 jam
↓
Dorong viewing
↓
Nurture jika tidak respon
```

Follow-up:

```text
No reply after 2 hours → follow-up
No reply after 1 day → follow-up kedua
No reply after 3 days → masuk nurture
```

## 12.8 Template: Developer Project Sales

Tone:

```text
Informative
Product-focused
CTA to visit marketing gallery
Promo-aware but compliant
```

Flow:

```text
Greeting
↓
Qualification
↓
Explain project benefit
↓
Send brochure/listing
↓
Offer visit marketing gallery
↓
Follow-up promo/availability
↓
Booking fee
↓
KPR/document process
```

## 12.9 Template: Rental Property Flow

Pipeline:

```text
New Inquiry
Budget Confirmed
Unit Sent
Visit Scheduled
Document Check
Payment
Move-in
Closed Lost
```

Common qualification:

- Move-in date
- Rental duration
- Number of occupants
- Furnished/unfurnished
- Budget
- Area

## 12.10 Template: Investment Property Flow

Tone:

```text
Analytical
Data-driven
ROI-oriented
Professional
```

Common qualification:

- Budget
- Investment goal
- Rental yield expectation
- Capital gain expectation
- Holding period
- Area preference

---

# 13. Flow Customizer UX

## 13.1 UX Principle

Retantion tidak boleh memulai dari blank canvas.

Setup flow:

```text
1. Choose template
2. Customize pipeline
3. Set follow-up timing
4. Set AI tone
5. Set approval rules
6. Test simulation
7. Publish
```

## 13.2 Visual Step Flow

Example:

```text
Lead Masuk
↓
Auto Qualification
↓
Assign Agent
↓
Send Listing Recommendation
↓
Follow-up
↓
Schedule Viewing
↓
Negotiation
↓
Closing / Lost
```

## 13.3 Rule Builder

Gunakan format:

```text
WHEN
IF
THEN
```

Example:

```text
WHEN
[ Lead status changed to ] [ Listing Sent ]

IF
[ Customer has not replied for ] [ 24 hours ]

THEN
[ Create follow-up task ] for [ Assigned Agent ]
```

Example:

```text
WHEN
[ New lead received ]

IF
[ Budget is missing ]

THEN
[ Generate qualification question ]
```

## 13.4 Step Settings

Setiap step harus punya:

1. Goal
2. Required data
3. Action
4. Message template
5. Next step
6. Approval setting
7. Escalation rule, optional

## 13.5 Draft / Publish Versioning

Playbook status:

```text
Draft
Testing
Published
Archived
```

Requirements:

- Perubahan playbook tidak langsung aktif.
- User harus test dulu.
- User harus publish manual.
- Bisa rollback ke versi sebelumnya.
- Semua perubahan tercatat di audit log.

## 13.6 Acceptance Criteria

- User bisa memilih template.
- User bisa mengedit pipeline.
- User bisa mengedit follow-up rule.
- User bisa mengedit template pesan.
- User bisa mengatur AI tone.
- User bisa menjalankan simulation.
- User bisa publish playbook.
- User bisa rollback ke versi sebelumnya.

---

# 14. Message Template Builder

## 14.1 Purpose

Menyediakan template chat untuk setiap stage sales.

## 14.2 Default Template Categories

- New lead greeting
- Qualification question
- Listing recommendation
- Follow-up H+1
- Follow-up H+3
- Viewing invitation
- Viewing confirmation
- Post-viewing feedback
- Negotiation follow-up
- Booking reminder
- Lost lead nurture
- Web chatbot greeting
- WhatsApp handoff message

## 14.3 Variables

Supported variables:

```text
{{customer_name}}
{{agent_name}}
{{agency_name}}
{{area_interest}}
{{budget}}
{{property_name}}
{{property_price}}
{{viewing_date}}
{{viewing_location}}
{{property_link}}
{{agent_phone}}
```

## 14.4 Example Template

```text
Halo {{customer_name}}, saya bantu follow-up ya.

Dari pilihan properti di {{area_interest}} yang kemarin saya kirim, apakah ada yang menarik?

Kalau berkenan, saya bisa bantu jadwalkan viewing untuk minggu ini.
```

## 14.5 Acceptance Criteria

- Admin bisa create/edit/delete template.
- Template bisa menggunakan variables.
- Template bisa dikaitkan ke pipeline stage.
- Template bisa dipakai oleh AI sebagai base.
- Template bisa preview dengan sample data.
- Template bisa diset sebagai active/inactive.

---

# 15. AI Sales Copilot

## 15.1 Purpose

AI membantu agent dan manager melakukan pekerjaan sales lebih cepat, tetapi tidak menggantikan decision-making agent.

## 15.2 AI Capabilities

AI membantu:

- Extract kebutuhan buyer dari chat.
- Membuat buyer profile.
- Membuat conversation summary.
- Menentukan lead temperature.
- Membuat recommended next action.
- Membuat draft follow-up message.
- Mencocokkan buyer dengan listing.
- Menjelaskan kenapa listing cocok.
- Membaca objection customer.
- Membuat lost reason summary.
- Membuat report insight untuk owner.

## 15.3 AI Must Follow Playbook

Setiap AI action harus membaca:

- Tenant playbook
- Agency tone
- Pipeline stage
- Message template
- Forbidden claims
- Approval rules
- Lead context
- Property data
- Channel context

## 15.4 Forbidden Claims

Default forbidden claims:

- Jangan menjanjikan diskon.
- Jangan bilang unit available tanpa cek database.
- Jangan menjamin KPR pasti approved.
- Jangan memberikan nasihat legal final.
- Jangan mengirim pesan tanpa approval jika rule membutuhkan approval.
- Jangan menjanjikan harga final tanpa validasi agent/manager.
- Jangan menyebut komisi internal kepada customer.

## 15.5 Automation Level

| Level | Description |
|---|---|
| Suggest Only | AI hanya memberi saran |
| Approval Required | AI buat draft, agent approve |
| Auto-send | AI boleh kirim untuk pesan aman tertentu |

Default MVP:

```text
AI generates draft.
Agent approves before send.
```

Auto-send hanya untuk:

- Greeting sederhana.
- Reminder viewing.
- Thank you message.
- Follow-up template yang sudah approved.
- Web chatbot automated qualification.

## 15.6 AI Workflow Example: Lead Intake

```text
Incoming message
↓
Save raw message
↓
Queue AI extraction
↓
Extract buyer intent and preference
↓
Update lead profile
↓
Create next action
↓
Suggest reply
```

## 15.7 AI Workflow Example: Follow-up

```text
Lead status = Listing Sent
↓
No customer reply after 24 hours
↓
Rule engine triggers follow-up
↓
AI reads lead summary and playbook
↓
AI generates draft
↓
Agent approves/edits/sends
```

## 15.8 AI Output Schema Example

```json
{
  "intent": "buy_property",
  "budget_min": 1200000000,
  "budget_max": 1500000000,
  "locations": ["BSD", "Gading Serpong"],
  "property_type": "house",
  "bedrooms": 3,
  "urgency": "medium",
  "objections": ["ingin dekat sekolah"],
  "next_action": "send_matching_listing",
  "confidence": 0.86
}
```

## 15.9 Acceptance Criteria

- AI bisa extract buyer preference dari chat.
- AI bisa membuat summary conversation.
- AI bisa membuat draft follow-up sesuai tone agency.
- AI tidak boleh melanggar forbidden claims.
- AI output harus disimpan untuk audit.
- Agent bisa accept/edit/reject AI suggestion.
- Sistem mencatat acceptance rate AI suggestion.

---

# 16. Property Matching

## 16.1 Purpose

Mencocokkan kebutuhan buyer dengan listing agency.

## 16.2 Matching Logic

Gunakan hybrid approach:

### Structured filter

- Area
- Budget
- Property type
- Bedrooms
- Land/building size
- Availability

### Semantic matching

- Dekat sekolah
- Lingkungan tenang
- Cocok keluarga muda
- Dekat tol
- Cocok investasi
- Premium neighborhood
- Siap huni
- Butuh renovasi ringan

## 16.3 Matching Flow

```text
Buyer preference
↓
SQL filter listing
↓
Vector reranking
↓
AI explanation
↓
Agent chooses listing
↓
Send to customer
```

## 16.4 Matching Output

AI menampilkan:

- Top recommended listing
- Match percentage
- Reason why matched
- Possible concern
- Suggested message to customer

Example:

```text
Listing A — 86% match

Reason:
- Masuk budget
- Area BSD
- 3 kamar
- Dekat sekolah
- Cocok untuk keluarga muda

Concern:
- Harga sedikit mendekati batas atas budget customer
```

## 16.5 Acceptance Criteria

- Agent bisa melihat recommended listing.
- Agent bisa filter/reorder recommendation.
- AI tidak boleh menyarankan listing unavailable.
- AI harus menjelaskan alasan match.
- Agent bisa mengirim listing ke customer.

---

# 17. Task, Reminder & Notification

## 17.1 Purpose

Memastikan lead tidak lupa di-follow-up.

## 17.2 Reminder Types

- New lead not contacted.
- Follow-up due.
- Viewing reminder.
- Post-viewing follow-up.
- Hot lead idle.
- Manager escalation.
- Booking/DP reminder.
- Lost lead nurture.

## 17.3 Notification Channels

- In-app notification.
- Email notification.
- WhatsApp reminder to agent, optional.
- Push notification, future.

## 17.4 Acceptance Criteria

- Sistem bisa create task otomatis dari rule.
- Agent bisa mark task as done.
- Manager bisa melihat overdue task.
- Owner bisa melihat follow-up compliance.
- Reminder bisa dikonfigurasi per playbook.

---

# 18. Viewing Scheduler

## 18.1 Purpose

Mencatat dan mengingatkan jadwal viewing.

## 18.2 Features

- Create viewing schedule.
- Link viewing to lead and property.
- Assign agent.
- Set location.
- Set date/time.
- Reminder before viewing.
- Post-viewing follow-up task.
- Viewing status: Scheduled / Completed / Cancelled / No Show.

## 18.3 Acceptance Criteria

- Agent bisa membuat jadwal viewing.
- Customer bisa menerima confirmation message.
- Reminder dibuat otomatis.
- Setelah viewing completed, sistem membuat post-viewing follow-up task.
- Viewing data masuk report.

---

# 19. Deals & Closing

## 19.1 Purpose

Mencatat progress deal setelah customer tertarik.

## 19.2 Features

- Deal creation from lead.
- Deal value.
- Property linked.
- Customer linked.
- Agent linked.
- Stage: Negotiation / Booking / DP / Closed Won / Closed Lost.
- Commission estimation.
- Closing notes.
- Lost reason.

## 19.3 Acceptance Criteria

- Deal bisa dibuat dari lead.
- Deal memiliki value dan stage.
- Closed Won masuk dashboard.
- Closed Lost wajib memilih lost reason.
- Owner bisa melihat deal by agent.

---

# 20. Reporting & Dashboard

## 20.1 Owner Dashboard

Metrics:

- Total leads
- New leads today
- Lead by source
- Assigned leads by agent
- Follow-up overdue
- Hot prospects
- Viewing scheduled
- Closing rate
- Lost reason
- Revenue / commission estimation
- AI usage cost
- Channel performance

## 20.2 Agent Dashboard

Metrics:

- My leads
- Follow-up due today
- Hot prospects
- Viewing schedule
- Leads needing response
- AI suggested next action
- My closed deals

## 20.3 Manager Dashboard

Metrics:

- Team activity
- Lead response time
- Follow-up compliance
- Agent performance
- Stuck leads
- Hot lead not touched
- Viewing conversion rate

## 20.4 Web Chat Widget Analytics

Metrics:

- Widget impressions
- Chat opened
- Conversations started
- Leads captured
- Lead capture conversion rate
- WhatsApp handoff clicks
- Top customer questions
- Top area interest
- Top budget range

## 20.5 Acceptance Criteria

- Owner can filter by date range.
- Owner can filter by source.
- Owner can filter by agent.
- Dashboard updates from lead/conversation/task/deal activity.
- Web widget analytics available per widget.

---

# 21. CMS Information Architecture

Main menu:

```text
Dashboard
Inbox
Leads
Properties
Pipeline
Tasks
Viewings
Deals
Sales Playbook
Reports
Team
Channels
Settings
Billing
```

Sales Playbook submenu:

```text
Template Library
Active Playbook
Pipeline Stages
Follow-up Rules
Message Templates
AI Behavior
Approval Rules
Escalation Rules
Simulation
Version History
```

Channels submenu:

```text
Web Chat Widget
WhatsApp Business
Instagram Leads
TikTok Leads
Manual Import
```

Settings submenu:

```text
Agency Profile
Branding
Users & Roles
Permissions
Notification
Data Import/Export
Audit Log
API Settings
```

---

# 22. Technical Architecture

## 22.1 Recommended Stack

```text
Frontend:
Next.js / React

Backend:
NestJS / FastAPI

Database:
PostgreSQL

Vector:
pgvector

Queue:
BullMQ + Redis

Storage:
S3-compatible object storage

AI Service:
Separate AI worker/service

Messaging:
WhatsApp Business API

Monitoring:
Sentry, PostHog, OpenTelemetry
```

## 22.2 Architecture Diagram

```text
Frontend CMS
Web Chat Widget
        |
Backend API
        |
PostgreSQL / Main Database
        |
Redis + Queue Worker
        |
AI Service Layer
        |
pgvector / Vector Search
        |
WhatsApp / Channel Integrations
```

## 22.3 Core Services

For MVP, build as modular monolith first:

```text
Auth Module
Tenant Module
CRM Module
Inbox Module
Property Module
Playbook Module
AI Module
Notification Module
Channel Module
Billing Module
Report Module
```

Can be split into microservices later if scale requires it.

## 22.4 Queue Jobs

```text
process_incoming_message
extract_lead_profile
update_conversation_summary
match_properties
generate_followup
send_reminder
sync_whatsapp_status
daily_broker_report
billing_usage_rollup
widget_analytics_rollup
```

## 22.5 Database Core Tables

```text
tenants
users
roles
permissions
contacts
leads
lead_sources
conversations
messages
properties
property_media
buyer_preferences
pipeline_stages
tasks
viewing_schedules
deals
playbooks
playbook_versions
message_templates
automation_rules
ai_summaries
ai_suggestions
ai_usage_logs
audit_logs
subscriptions
widgets
widget_sessions
channel_accounts
whatsapp_accounts
whatsapp_phone_numbers
```

## 22.6 AI Data Strategy

PostgreSQL is source of truth.

```text
PostgreSQL:
- Lead
- Contact
- Listing
- Pipeline
- Task
- Deal
- Playbook config
- Conversation

pgvector:
- Property description embedding
- Lead summary embedding
- Conversation summary embedding
- Knowledge base embedding

Redis:
- Queue
- Cache
- Rate limit
```

## 22.7 Vector Strategy

Use vector only for semantic search.

Use SQL for:

- Budget filter
- Area filter
- Bedroom filter
- Property type filter
- Availability filter
- Agent performance
- Closing rate

Use vector for:

- Semantic listing match
- Conversation summary search
- Knowledge base search
- Sales script recommendation

---

# 23. AI Cost & Token Control

## 23.1 Usage Logging

Table: `ai_usage_logs`

Fields:

```text
id
tenant_id
user_id
feature
model
input_tokens
output_tokens
cached_tokens
estimated_cost
latency_ms
status
created_at
```

## 23.2 Token Optimization Rules

- Jangan kirim semua chat history.
- Pakai lead summary.
- Kirim last 5–10 messages only.
- Gunakan template pendek.
- Gunakan model murah untuk extraction/classification.
- Gunakan model lebih pintar hanya untuk reasoning berat.
- Cache property summary.
- Debounce incoming message sebelum AI processing.
- Batch process non-urgent AI jobs.
- Batasi output dengan schema.

## 23.3 AI Monitoring Metrics

- Token cost per tenant.
- Token cost per feature.
- AI latency.
- AI error rate.
- AI suggestion accepted rate.
- AI suggestion edited rate.
- Extraction confidence average.

---

# 24. Security, Privacy & Governance

## 24.1 Security Requirements

- Tenant isolation.
- RBAC.
- Audit log.
- Webhook validation.
- Encrypted API keys.
- Encrypted channel credentials.
- PII masking in logs.
- Backup database.
- Rate limiting.
- Soft delete.
- Secure file upload.
- Allowed domain for widget.
- CORS/domain protection for widget.

## 24.2 AI Governance

- Forbidden claims.
- Approval required by default.
- Prompt versioning.
- AI output logging.
- Human override.
- AI confidence scoring.
- Ability to disable AI per tenant.
- Ability to disable auto-send.

## 24.3 Compliance Notes

- Product should not rely on unofficial WhatsApp Web QR automation.
- WhatsApp onboarding should use official Meta Embedded Signup / WhatsApp Business Platform integration.
- AI should be positioned as business sales assistant for property lead handling, not general-purpose chatbot.

---

# 25. MVP Scope

## 25.1 MVP Objective

Membuktikan bahwa Retantion bisa membantu agency:

- Menangkap lead dari web chat.
- Mengelola pipeline.
- Menjaga follow-up.
- Menggunakan template SOP.
- Menghasilkan AI draft yang berguna.
- Mengelola listing dan matching dasar.
- Menyiapkan foundation untuk WhatsApp Business integration.

## 25.2 MVP P0 Features

Wajib ada:

1. Multi-tenant workspace
2. User role: Owner, Manager, Agent, Admin
3. Lead/contact management
4. Property listing management
5. Pipeline kanban
6. Task and follow-up reminder
7. Message template library
8. Sales Playbook template selection
9. Basic playbook customization
10. AI lead summary
11. AI follow-up draft
12. AI buyer preference extraction
13. Basic dashboard
14. Audit log basic
15. Web Chat Widget
16. Widget customization
17. Embed code generator
18. Test chatbot sandbox
19. Web chat conversation inbox
20. Web lead auto creation
21. AI lead extraction from web chat
22. Basic handover to agent
23. WhatsApp handoff link

## 25.3 MVP P1 Features

After P0 stable:

1. Official WhatsApp Embedded Signup
2. WhatsApp Business API connection
3. WhatsApp webhook
4. WhatsApp inbox
5. WhatsApp message template management
6. Existing WhatsApp Business App onboarding if supported/eligible
7. Channel mapping: Web lead → WhatsApp lead
8. AI property matching
9. Viewing scheduler
10. Manager escalation rules
11. Advanced report
12. Playbook simulation
13. Playbook versioning
14. Import/export Excel
15. Billing/subscription

## 25.4 P2 Features

Future:

1. Instagram/TikTok lead integration
2. Auto-send safe messages
3. Advanced AI sales coaching
4. Dedicated customer portal
5. White-label agency portal
6. MCP/API integrations
7. Enterprise dedicated tenant
8. Multi-number WhatsApp per agency
9. Agent routing by area/project
10. Campaign/source attribution

## 25.5 Out of Scope for MVP

Do not build first:

- Full marketplace properti publik.
- Accounting lengkap.
- Payroll/komisi kompleks.
- Native mobile app.
- Full ERP developer property.
- AI auto-negotiation.
- Legal document automation.
- KPR approval automation.
- Complex no-code workflow builder.
- Full WhatsApp campaign blast system.

---

# 26. User Stories & Acceptance Criteria

## 26.1 Owner: Monitor Lead & Agent

```text
Sebagai owner agency,
saya ingin melihat semua lead dan performa agent,
agar saya tahu lead mana yang belum di-follow-up dan agent mana yang produktif.
```

Acceptance criteria:

- Owner bisa melihat semua lead.
- Owner bisa filter by agent/source/status.
- Owner bisa melihat overdue follow-up.
- Owner bisa melihat hot lead idle.
- Owner bisa melihat dashboard conversion.

## 26.2 Manager: Setup Follow-up SOP

```text
Sebagai manager,
saya ingin membuat SOP follow-up otomatis,
agar agent tidak lupa mengejar customer setelah listing dikirim.
```

Acceptance criteria:

- Manager bisa membuat rule When/If/Then.
- Rule bisa membuat task otomatis.
- Rule bisa membutuhkan approval.
- Rule bisa ditest sebelum publish.
- Rule tercatat di playbook version.

## 26.3 Agent: Use AI Draft

```text
Sebagai agent,
saya ingin mendapatkan draft chat follow-up dari AI,
agar saya bisa membalas customer lebih cepat dan tetap sesuai SOP agency.
```

Acceptance criteria:

- Agent bisa melihat AI suggested reply.
- Agent bisa edit draft.
- Agent bisa approve/send.
- Draft mengikuti tone agency.
- Agent bisa reject suggestion.

## 26.4 Admin: Manage Template

```text
Sebagai admin,
saya ingin mengatur template pesan,
agar semua agent menggunakan gaya komunikasi yang konsisten.
```

Acceptance criteria:

- Admin bisa create/edit template.
- Template bisa memakai variable.
- Template bisa dikaitkan ke pipeline stage.
- Template bisa digunakan AI sebagai base message.

## 26.5 Agency: Embed Web Chat Widget

```text
Sebagai agency,
saya ingin memasang chatbot di website,
agar visitor website bisa menjadi lead di Retantion.
```

Acceptance criteria:

- Agency bisa create widget.
- Agency bisa customize branding.
- Agency bisa copy embed code.
- Chat dari website masuk inbox.
- Chat otomatis membuat lead.

## 26.6 Agency: Test Chatbot Before Publish

```text
Sebagai agency,
saya ingin mencoba chatbot di CMS sebelum dipasang,
agar saya yakin AI mengikuti SOP dan tone agency.
```

Acceptance criteria:

- User bisa membuka test chatbot.
- User bisa mengetik simulasi customer.
- Sistem menampilkan detected intent, extracted data, dan suggested reply.
- User bisa edit playbook jika hasil belum sesuai.

## 26.7 Agency: Connect WhatsApp

```text
Sebagai agency,
saya ingin menghubungkan WhatsApp Business saya,
agar chat customer masuk ke Retantion.
```

Acceptance criteria:

- User bisa membuka WhatsApp setup wizard.
- User bisa memilih existing WhatsApp Business App atau new API number.
- User diarahkan ke official Meta onboarding flow.
- Setelah connected, incoming message masuk Retantion.
- Sistem menampilkan status connection.

---

# 27. Success Metrics

## 27.1 Business Metrics

- Number of paying agencies
- Monthly recurring revenue
- Trial-to-paid conversion
- Churn rate
- Average revenue per agency
- Number of active agents per agency

## 27.2 Product Metrics

- Leads created per agency
- Follow-up completion rate
- Average response time
- Viewing scheduled rate
- Closing rate
- Lost lead rate
- AI draft acceptance rate
- Web widget lead conversion rate
- WhatsApp connection success rate

## 27.3 AI Metrics

- Lead extraction accuracy
- AI suggestion accepted rate
- AI message edited rate
- Token cost per tenant
- AI latency
- AI error rate
- Property matching click/use rate

## 27.4 Channel Metrics

### Web Chat

- Widget impressions
- Chat open rate
- Conversation started rate
- Lead capture rate
- WhatsApp handoff click rate

### WhatsApp

- Incoming messages
- Response time
- Conversation-to-lead conversion
- Template approval rate
- Failed message rate

---

# 28. Pricing Direction

## 28.1 Solo Agent

Suggested price:

```text
Rp149.000 - Rp299.000 / bulan
```

Features:

- Lead CRM
- Pipeline
- Reminder
- Listing catalog
- Basic AI draft
- Basic web widget

## 28.2 Agency Team

Suggested price:

```text
Rp799.000 - Rp2.500.000 / bulan
```

Features:

- Multi-agent
- Team dashboard
- Playbook template
- Follow-up automation
- AI lead summary
- Web chat widget
- Basic reports

## 28.3 Pro Agency

Suggested price:

```text
Rp3.000.000 - Rp10.000.000 / bulan
```

Features:

- WhatsApp integration
- Custom playbook
- Advanced AI
- Manager escalation
- Advanced report
- Property matching
- Multiple widget
- Priority support

## 28.4 Potential Add-ons

- Additional agents
- Additional WhatsApp number
- Additional AI usage
- White-label widget
- Advanced reporting
- Dedicated onboarding
- Custom integration

---

# 29. Product Roadmap

## Phase 1 — MVP CRM + Web Chat

Goal: agency bisa coba product tanpa WhatsApp.

Deliverables:

- Login/workspace
- Lead/contact
- Property listing
- Pipeline
- Task/reminder
- Template message
- Basic Sales Playbook
- AI summary and draft
- Web Chat Widget
- Widget embed
- Web chat inbox
- Basic dashboard

## Phase 2 — WhatsApp-first CRM

Goal: chat WhatsApp masuk Retantion.

Deliverables:

- Official WhatsApp Embedded Signup
- WhatsApp inbox
- Conversation sync
- Auto lead creation
- AI extraction from chat
- Agent assignment
- Follow-up automation
- WhatsApp handoff from web chat

## Phase 3 — AI Sales Copilot

Goal: AI mulai memberi insight dan matching.

Deliverables:

- AI property matching
- AI next action
- AI objection detection
- Broker insight
- Lead scoring
- Playbook simulation
- Playbook versioning

## Phase 4 — Scalable SaaS

Goal: siap jual massive dan masuk agency besar.

Deliverables:

- Billing
- Usage tracking
- Advanced role
- Template marketplace
- White-label option
- Enterprise support
- API access
- Advanced audit log
- Dedicated tenant option

---

# 30. Risks & Mitigations

## 30.1 Risk: WhatsApp Integration Friction

Problem:

- Agency bisa kesulitan setup Meta Business, WABA, phone number, dan approval.

Mitigation:

- Web Chat Widget sebagai channel pertama.
- Setup wizard sederhana.
- Guided onboarding.
- Support documentation.
- Avoid promise “tinggal scan QR”.

## 30.2 Risk: AI Hallucination

Problem:

- AI bisa salah menyebut harga, availability, diskon, atau legal status.

Mitigation:

- AI mengikuti database.
- Forbidden claims.
- Approval required by default.
- Confidence score.
- Human override.
- Audit log.

## 30.3 Risk: User Bingung dengan Flow Builder

Problem:

- Agency owner/manager belum tentu familiar dengan automation builder.

Mitigation:

- Template first.
- Avoid blank canvas.
- Use When/If/Then.
- Use Sales Playbook language.
- Provide simulation.

## 30.4 Risk: Token Cost Membengkak

Problem:

- AI usage bisa mengurangi margin SaaS.

Mitigation:

- AI usage logging.
- Summary-based prompt.
- Model routing.
- Caching.
- Rate limit per plan.
- Limit AI features by package.

## 30.5 Risk: Tenant Data Leak

Problem:

- Multi-tenant shared database berisiko jika query salah.

Mitigation:

- tenant_id mandatory.
- Row-level policy consideration.
- Automated tests.
- Audit log.
- Strict access middleware.

---

# 31. Open Questions

1. Apakah Retantion akan target solo agent dulu atau agency team dulu?
2. Apakah WhatsApp integration akan dibangun sendiri atau melalui BSP/partner awal?
3. Apakah product akan memakai nama Retantion final atau nama lain?
4. Apakah web widget perlu white-label dari awal?
5. Apakah property listing akan bisa public link sejak MVP?
6. Apakah agent boleh auto-send dari web chatbot atau harus approval?
7. Apakah billing akan dibuat dari awal atau manual invoice dulu?
8. Apakah data listing awal akan banyak dari import Excel?
9. Apakah CRM akan support seller/owner lead juga atau buyer lead dulu?
10. Apakah ada target niche area awal, misalnya BSD/Gading Serpong/Jakarta Selatan?

---

# 32. Source Notes for WhatsApp Integration

The WhatsApp integration section should be validated against current Meta documentation during implementation.

Relevant official references:

- Meta for Developers — WhatsApp Business Platform Overview: https://developers.facebook.com/documentation/business-messaging/whatsapp/overview
- Meta for Developers — Embedded Signup Overview: https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/overview/
- Meta for Developers — Onboard WhatsApp Business app users: https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users/
- Meta for Developers — Embedded Signup Implementation: https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/implementation/

---

# 33. Final Product Definition

Retantion Property CRM adalah:

```text
CRM properti
+ Web Chat Widget
+ WhatsApp Business Inbox
+ Property listing management
+ Sales pipeline
+ Follow-up automation
+ AI Sales Copilot
+ Customizable Sales Playbook
+ Template SOP Library
+ Owner/manager dashboard
```

Core strategy:

```text
Template dulu supaya user cepat jalan.
Custom builder supaya tiap agency tetap fleksibel.
AI mengikuti SOP, bukan membuat SOP sendiri.
Database tetap jadi source of truth.
Agent manusia tetap pegang kontrol closing.
Web Chat Widget mempercepat trial sebelum WhatsApp integration.
WhatsApp Business integration menggunakan jalur resmi.
```

