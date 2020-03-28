import React, { useState, useRef } from 'react';
import Ripple from 'react-material-ripple';
import '../assets/scss/block.scss';

const Block = props => {
  const [setActive, setActiveState] = useState('');
  const [setHeight, setHeightState] = useState('0px');

  const content = useRef(null);

  const toggleAccordion = () => {
    setActiveState(setActive === '' ? 'active' : '');
    setHeightState(
      setActive === 'active' ? '0px' : `${content.current.scrollHeight}px`
    );
  };

  const topBlock = [
    {
      label: 'id',
      value: props.block.id
    },
    {
      label: 'timestamp',
      value: props.block.timestamp
    },
    {
      label: 'actions',
      value: props.block.transactions.length
    }
  ];

  const midBlock = [
    {
      label: 'block #',
      value: props.block.block_num
    },
    {
      label: 'producer',
      value: props.block.producer
    },
    {
      label: 'confirmed',
      value: props.block.confirmed
    },
    {
      label: 'previous',
      value: props.block.previous
    },
    {
      label: 'transaction merkle root',
      value: props.block.transaction_mroot
    },
    {
      label: 'action merkle root',
      value: props.block.action_mroot
    },
    {
      label: 'schedule version',
      value: props.block.schedule_version
    },
    {
      label: 'new producers',
      value: props.block.new_producers
    },
    {
      label: 'producer signature',
      value: props.block.producer_signature
    }
  ];

  return (
    <div
      className="block"
      style={{ animationDelay: `${props.blockIndex * 0.05}s` }}
    >
      <div className="block-wrapper">
        {topBlock.map((block, index) => (
          <div className="block-item" key={index}>
            <div className="block-item-label">{block.label}</div>
            <div className="block-item-value">{block.value}</div>
          </div>
        ))}
        <div
          ref={content}
          style={{ maxHeight: `${setHeight}` }}
          className="block-content"
        >
          {midBlock.map((block, index) => (
            <div className="block-item" key={index}>
              <div className="block-item-label">{block.label}</div>
              <div className="block-item-value">{block.value}</div>
            </div>
          ))}

          {props.block.transactions.length && (
            <div className="block-transactions">
              <div className="block-transaction-row">
                <div className="block-transaction-col-large label">
                  Transactions - ID
                </div>
                <div className="block-transaction-col label">Status</div>
                <div className="block-transaction-col label">CPU Usage</div>
                <div className="block-transaction-col label">NET Usage</div>
                <div className="block-transaction-col label">Actions</div>
              </div>

              {props.block.transactions.map((transaction, index) => (
                <div className="block-transaction-row" key={index}>
                  <div className="block-transaction-col-large">
                    {transaction.trx.id}
                  </div>
                  <div className="block-transaction-col">
                    {transaction.status}
                  </div>
                  <div className="block-transaction-col">
                    {transaction.cpu_usage_us}
                  </div>
                  <div className="block-transaction-col">
                    {transaction.net_usage_words}
                  </div>
                  <div className="block-transaction-col">
                    {transaction.trx.transaction?.actions?.length}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <Ripple style={{ width: '100%', display: 'block' }}>
          <button onClick={toggleAccordion} className="block-button">
            <div
              className={`text ${
                setActive === 'active' ? 'active' : 'disabled'
              } `}
            >
              Less
            </div>
            <div
              className={`text ${setActive === '' ? 'active' : 'disabled'} `}
            >
              Details
            </div>
          </button>
        </Ripple>
      </div>
    </div>
  );
};

export default Block;
