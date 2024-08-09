import styles from './styles.module.css';
import {PackageList} from "./PackageList";
import {PackageCard} from "./PackageCard";

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {PackageList.map((props) => (
            <PackageCard key={props.title} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
