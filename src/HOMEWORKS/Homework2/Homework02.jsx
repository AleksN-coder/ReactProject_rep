import Card from '../../components/Card/Card';

const homerData = {
  name: 'Гомер Симпсон',
  job: 'Служащий',
  hobby: 'Смотреть телевизор',
  avatar: 'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
};

function Homework02() {
  return (
    <div className="cards-row">
      <Card {...homerData} />
      <Card {...homerData} />
      <Card {...homerData} />
    </div>
  );
}

export default Homework02;