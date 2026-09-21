const products = [
  {
    name: 'Premium Adult Video Bundle',
    description: 'Private adult video package designed for direct digital delivery.',
    price: 75,
    image:
      'https://images.unsplash.com/photo-1516280440614-421e0f5d0b4a?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Licensed Adult Video Collection',
    description: 'A curated adult collection with a clean, direct checkout flow.',
    price: 60,
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Exclusive Adult Package',
    description: 'Premium adult content bundle for private purchase requests.',
    price: 80,
    image:
      'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Adult Feet Content',
    description: 'A dedicated adult feet content collection for private access.',
    price: 70,
    image:
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Custom Request',
    description: 'For any custom adult request or content, message directly for details.',
    price: 'DM',
    image:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80',
  },
];

const productGrid = document.getElementById('productGrid');

function createTelegramLink(productName, price) {
  const message =
    `Hi, I want to purchase "${productName}"${price === 'DM' ? '' : ` for $${price}`}. Please send me the available payment methods and delivery details.`;

  return `https://t.me/imfromyourdreams?text=${encodeURIComponent(message)}`;
}

products.forEach((product) => {
  const card = document.createElement('article');
  card.className = 'product-card';

  card.innerHTML = `
    <img class="product-thumb" src="${product.image}" alt="${product.name} thumbnail" />
    <div class="product-body">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <div class="price-row">
        <div class="price">${product.price === 'DM' ? 'DM' : `$${product.price}`}</div>
        <a
          href="${createTelegramLink(product.name, product.price)}"
          target="_blank"
          rel="noopener noreferrer"
          class="buy-btn"
        >
          Buy
        </a>
      </div>
    </div>
  `;

  productGrid.appendChild(card);
});

const ageGate = document.getElementById('ageGate');
const enterSite = document.getElementById('enterSite');
const leaveSite = document.getElementById('leaveSite');

enterSite.addEventListener('click', () => {
  ageGate.classList.add('hidden');
});

leaveSite.addEventListener('click', () => {
  window.location.href = 'about:blank';
});
