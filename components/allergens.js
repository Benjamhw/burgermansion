import styles from './allergens.module.css';
import { Collapse } from '@nextui-org/react';

export default function AllergensSection(props) {
  const allergens = [
    '1. Egg',
    '2. Fisk',
    '3. Gluten/Hvetemel',
    '4. Melk',
    '5. Nøtter',
    '6. Peanøtter',
    '7. Selleri',
    '8. Sennep',
    '9. Sesam',
    '10. Skalldyr',
    '11. Soya',
    '12. Sulfitt',
    '13. Bløtdyr',
    '14. Lupin',
  ];

  return (
    <div className={styles.wrapper}>
      <div>
        <Collapse title={<h1>Allergener</h1>}>
          <div className={`${styles.container}`}>
            {allergens.map(x => (
              <p key={x}>{x}</p>
            ))}
          </div>
        </Collapse>
      </div>
    </div>
  );
}
