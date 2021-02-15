import React from 'react';
import './styles.scss';
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';
import { Products } from '../../models/Products';

const Items = (props: {data: Products[]}) => {

  return (
    <div>
      {props.data.map(product => (
        <div className="item" style={{
            background: `url(${product.img})`,
            backgroundSize: 'cover'
          }} key={product.id}
        >
          <div className="top-section">
            <div className="product-name-and-lessons">
              <h3>{product.name}</h3>
              <p>{product.lessons} lessons</p>
            </div>
            <div className="course-time">
              <p>{product.courseTime} min</p>
            </div>
          </div>
          <div className="bottom-section">
            <PlayArrowRoundedIcon />
          </div>
        </div>
      ))}

    </div>
  );
};

export default Items;