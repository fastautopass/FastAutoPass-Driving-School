
# FastAutoPass: Elementor Local Map Setup Instructions

To implement the area-specific map system on your other sites using Elementor, follow these steps:

### 1. Section Setup
- Add a new **Section** with a single column.
- Set padding to `80px 0 80px 0`.
- Give the section a light grey background (`#f8f9fa`).

### 2. Heading & Intro
- Add a **Heading** widget:
  - Text: `Local Map of [Area Name], Bradford`
  - Tag: `H2`
  - Style: Montserrat font, font-weight 900, uppercase, italic.
- Add a **Text Editor** widget below:
  - Text: `Our automatic driving lessons cover the [Area Name] area shown below.`
  - Alignment: Center.

### 3. The Map Embed (Performance Optimized)
- Add an **HTML** widget.
- Paste the following template, replacing `[Area Name]` with your dynamic tag or specific area:
```html
<div class="map-container" style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 40px; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.15); border: 1px solid #eee;">
  <iframe 
    src="https://maps.google.com/maps?q=[Area Name],Bradford,UK&t=&z=14&ie=UTF8&iwloc=&output=embed" 
    width="100%" 
    height="100%" 
    style="position: absolute; top: 0; left: 0; border: 0;" 
    allowfullscreen="" 
    loading="lazy" 
    title="Map of [Area Name] Bradford for automatic driving lessons">
  </iframe>
</div>
```

### 4. Performance Best Practices
- **Lazy Loading:** Ensure the `loading="lazy"` attribute is present in the iframe code.
- **Defer Load:** If using a high-traffic page, use the **JetEngine** or **Elementor Addons** "Lazy Load" feature for sections.
- **Web Vitals:** The CSS padding trick (`padding-bottom: 56.25%`) prevents Layout Shift (CLS) by reserving space before the map loads.

### 5. SEO Text Enhancement
- Add an **Icon Box** widget or **Text Editor** below the map.
- List 2-3 bullet points:
  - "Test-route simulation including [Main Road A] and [Main Road B]."
  - "Strategic maneuvers practice near [Local Landmark]."
  - "Covering all streets within the [Postcode] area."
