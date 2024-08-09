import Heading from "@theme/Heading";
import clsx from "clsx";
import Link from "@docusaurus/core/lib/client/exports/Link";

export function Package({title, description, href}) {
  return (
    <div className={clsx('col col--4 margin-top--md')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
      <div className={styles.buttons}>
        <Link className="button button--primary"
              to={href}>
          Documentation
        </Link>
      </div>
    </div>
  );
}

