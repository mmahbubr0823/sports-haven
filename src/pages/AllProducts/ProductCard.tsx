import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { ProductCardProps } from '../../types/types';
const ProductCard: React.FC<ProductCardProps>  = ({ item }) => {
  const {
    _id,
    name,
    description,
    image,
  } = item;

  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        sx={{ height: 200 }}
        image={image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {description}
        </Typography>
      </CardContent>
      <CardActions className='flex justify-center'>
       <Link to={`/single-product/${_id}`}>
       <Button className='bg-[#f411a5]' size="middle">Details</Button>
       </Link>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
