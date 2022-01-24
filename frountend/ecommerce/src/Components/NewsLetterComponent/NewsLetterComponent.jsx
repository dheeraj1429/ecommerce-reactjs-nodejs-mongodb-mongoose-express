import React from 'react';

import './NewsLetterComponent.css';

function NewsLetterComponent() {
  return (
    <div class="subscribe-form">
      <form>
        <input type="text" placeholder="Email Address" />
        <button>
          <i class="fab fa-telegram-plane"></i>
        </button>
      </form>
    </div>
  );
}

export default NewsLetterComponent;
