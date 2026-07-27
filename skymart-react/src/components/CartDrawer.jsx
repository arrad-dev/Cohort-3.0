import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react';

export default function CartDrawer({ open, onClose, items, subtotal, changeQuantity, removeItem, clearCart }) {
  return (
    <div className={`drawer-layer ${open ? 'is-open' : ''}`} aria-hidden={!open}>
      <button className="drawer-backdrop" onClick={onClose} aria-label="Close cart" />
      <aside className="cart-drawer" aria-label="Shopping cart">
        <div className="drawer-header">
          <div>
            <span className="kicker">Your selection</span>
            <h2>Shopping cart</h2>
          </div>
          <button className="icon-button" onClick={onClose} aria-label="Close cart"><X size={20} /></button>
        </div>

        <div className="drawer-content">
          {items.length === 0 ? (
            <div className="cart-empty">
              <div className="empty-cart-icon"><ShoppingBag size={30} /></div>
              <h3>Your cart is empty</h3>
              <p>Add a few products and they will appear here.</p>
              <button className="button button-primary" onClick={onClose}>Start shopping</button>
            </div>
          ) : (
            <>
              <div className="cart-list">
                {items.map((item) => (
                  <article className="cart-item" key={item.id}>
                    <div className="cart-thumb"><img src={item.image} alt="" /></div>
                    <div className="cart-item-info">
                      <div>
                        <h3>{item.name}</h3>
                        <strong>${item.price}</strong>
                      </div>
                      <div className="cart-item-controls">
                        <div className="quantity-control">
                          <button onClick={() => changeQuantity(item.id, -1)} aria-label="Decrease quantity"><Minus size={14} /></button>
                          <span>{item.quantity}</span>
                          <button onClick={() => changeQuantity(item.id, 1)} aria-label="Increase quantity"><Plus size={14} /></button>
                        </div>
                        <button className="remove-button" onClick={() => removeItem(item.id)} aria-label="Remove item"><Trash2 size={16} /></button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
              <button className="clear-cart" onClick={clearCart}>Clear cart</button>
            </>
          )}
        </div>

        {items.length > 0 && (
          <div className="drawer-footer">
            <div className="subtotal-row"><span>Subtotal</span><strong>${subtotal.toFixed(2)}</strong></div>
            <p>Taxes and delivery are calculated at checkout.</p>
            <button className="button button-primary checkout-button">Continue to checkout</button>
          </div>
        )}
      </aside>
    </div>
  );
}
