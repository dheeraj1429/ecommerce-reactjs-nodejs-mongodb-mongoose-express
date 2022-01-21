import React from 'react';

import './LoaderComponent.css';

function LoaderComponent() {
  return (
    <div className="Loader_div">
      <img
        src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20style%3D%22margin%3A%20auto%3B%20background%3A%20rgba(241%2C%20242%2C%20243%2C%200)%3B%20display%3A%20block%3B%22%20width%3D%22200px%22%20height%3D%22200px%22%20viewBox%3D%220%200%20100%20100%22%20preserveAspectRatio%3D%22xMidYMid%22%3E%0A%3Cg%20transform%3D%22translate(20%2050)%22%3E%0A%3Ccircle%20cx%3D%220%22%20cy%3D%220%22%20r%3D%226%22%20fill%3D%22%23ebebeb%22%3E%0A%20%20%3CanimateTransform%20attributeName%3D%22transform%22%20type%3D%22scale%22%20begin%3D%22-0.375s%22%20calcMode%3D%22spline%22%20keySplines%3D%220.3%200%200.7%201%3B0.3%200%200.7%201%22%20values%3D%220%3B1%3B0%22%20keyTimes%3D%220%3B0.5%3B1%22%20dur%3D%221s%22%20repeatCount%3D%22indefinite%22%3E%3C%2FanimateTransform%3E%0A%3C%2Fcircle%3E%0A%3C%2Fg%3E%3Cg%20transform%3D%22translate(40%2050)%22%3E%0A%3Ccircle%20cx%3D%220%22%20cy%3D%220%22%20r%3D%226%22%20fill%3D%22%23d6d6d6%22%3E%0A%20%20%3CanimateTransform%20attributeName%3D%22transform%22%20type%3D%22scale%22%20begin%3D%22-0.25s%22%20calcMode%3D%22spline%22%20keySplines%3D%220.3%200%200.7%201%3B0.3%200%200.7%201%22%20values%3D%220%3B1%3B0%22%20keyTimes%3D%220%3B0.5%3B1%22%20dur%3D%221s%22%20repeatCount%3D%22indefinite%22%3E%3C%2FanimateTransform%3E%0A%3C%2Fcircle%3E%0A%3C%2Fg%3E%3Cg%20transform%3D%22translate(60%2050)%22%3E%0A%3Ccircle%20cx%3D%220%22%20cy%3D%220%22%20r%3D%226%22%20fill%3D%22%23b7b7b7%22%3E%0A%20%20%3CanimateTransform%20attributeName%3D%22transform%22%20type%3D%22scale%22%20begin%3D%22-0.125s%22%20calcMode%3D%22spline%22%20keySplines%3D%220.3%200%200.7%201%3B0.3%200%200.7%201%22%20values%3D%220%3B1%3B0%22%20keyTimes%3D%220%3B0.5%3B1%22%20dur%3D%221s%22%20repeatCount%3D%22indefinite%22%3E%3C%2FanimateTransform%3E%0A%3C%2Fcircle%3E%0A%3C%2Fg%3E%3Cg%20transform%3D%22translate(80%2050)%22%3E%0A%3Ccircle%20cx%3D%220%22%20cy%3D%220%22%20r%3D%226%22%20fill%3D%22%2375798f%22%3E%0A%20%20%3CanimateTransform%20attributeName%3D%22transform%22%20type%3D%22scale%22%20begin%3D%220s%22%20calcMode%3D%22spline%22%20keySplines%3D%220.3%200%200.7%201%3B0.3%200%200.7%201%22%20values%3D%220%3B1%3B0%22%20keyTimes%3D%220%3B0.5%3B1%22%20dur%3D%221s%22%20repeatCount%3D%22indefinite%22%3E%3C%2FanimateTransform%3E%0A%3C%2Fcircle%3E%0A%3C%2Fg%3E%0A%3C%2Fsvg%3E"
        alt=""
      />
    </div>
  );
}

export default LoaderComponent;
