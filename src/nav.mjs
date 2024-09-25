const app = document.querySelector("body");

app.insertAdjacentHTML(
  "afterbegin",
  `
<nav>
    <ul>
    <li><a href="/">Subscribe</a></li>
    <li><a href="/rent">Rent</a></li>
    <li><a href="/invoices">Invoices</a></li>
    </ul>
</nav>
`
);
