document.addEventListener("DOMContentLoaded", () => {
  const priceTags = document.querySelectorAll("[price-tag]");

  function formatPrice(price, decimalPlaces) {
    const formatter = new Intl.NumberFormat("en-IE", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: decimalPlaces,
      maximumFractionDigits: decimalPlaces,
    });

    return formatter.format(price);
  }

  if (priceTags.length > 0) {
    priceTags.forEach(function (priceTag) {
      const rawPrice = parseFloat(priceTag.textContent);
      const decimalPlaces = priceTag.hasAttribute("round-to-decimals")
        ? parseInt(priceTag.getAttribute("round-to-decimals"), 10)
        : 2;
      const formattedPrice = formatPrice(rawPrice, decimalPlaces);
      priceTag.textContent = formattedPrice;
    });
  }
});
