import React from 'react';
import './Lab.scss';

const Lab = () => {
  return (
    <div className="lab">
      <h2>Лаборатория</h2>
      <div className="lab-container">
        <div className="lab-section">
          <h3>Эксперименты с компонентами</h3>
          <div className="lab-components">
            {/* Здесь будут ваши эксперименты с компонентами */}
          </div>
        </div>
        
        <div className="lab-section">
          <h3>Тестирование новых фич</h3>
          <div className="lab-features">
            {/* Здесь будут ваши эксперименты с новыми фичами */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lab;
