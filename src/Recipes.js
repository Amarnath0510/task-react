import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export function Recipes({ name, chef, cuisine, picture, cooktimehours, ingredients, preparation },index) {

  return (
    <section className="section-container">
      <Card className="card-container" variant="outlined">
        <CardContent>
        key={index}
          <img className="img-container" src={picture} alt={name} />
          <div className="sub-container">
        
            <p>{name}</p>
            <p>{chef}</p>
            <p>{cuisine}</p>
            <p>{cooktimehours}</p>
            <p>{ingredients}</p>
            <p>{preparation}</p>
            
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
