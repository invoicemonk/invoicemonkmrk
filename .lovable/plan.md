

# Add Tawk.to Live Chat Widget

## Overview
Add the Tawk.to live chat script to the website so it loads on every page.

## Change

### `index.html`
Add the Tawk.to script just before the closing `</body>` tag (after the `<noscript>` block, before `</body>`):

```html
<!--Start of Tawk.to Script-->
<script type="text/javascript">
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/699086eff45fd51c3bd13d1e/1jhe8u6hu';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
</script>
<!--End of Tawk.to Script-->
```

## Files Modified

| File | Change |
|------|--------|
| `index.html` | Add Tawk.to script before `</body>` |

One file, no dependencies needed. The widget will appear on all pages automatically.

