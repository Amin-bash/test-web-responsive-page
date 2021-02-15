import React from 'react';
import './styles.scss';
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';
import '../Items/styles.scss'
import './styles.scss'
import { Products } from '../../models/Products';

const Favorite = (props: {data: Products[]}) => {

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

export default Favorite;