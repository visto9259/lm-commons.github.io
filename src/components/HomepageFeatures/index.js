import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const PackageList = [
  {
    title: 'LmcUser',
    description: (
      <>
        LmcUser is a user registration and authentication module for Laminas. LmcUser provides the foundations for
        adding user authentication and registration to your Laminas site. It is designed to be very simple and easy
        to extend.
      </>
    ),
    href: 'https://lm-commons.github.io/LmcUser/',
  },
  {
    title: 'LmcCors',
    description: (
      <>
        LmcCors is a simple Laminas MVC module that helps you to deal with Cross-Origin Resource Sharing (CORS).
      </>
    ),
    href: 'https://lm-commons.github.io/LmcCors/',
  },
  {
    title: 'LmcRbacMvc',
    description: (
      <>
        LmcRbacMvc is a role-based access control Laminas MVC module to provide additional
        features on top of Laminas\Permissions\Rbac
      </>
    ),
    href: 'https://lm-commons.github.io/LmcRbacMvc/',
  },
  {
    title: 'LmcMail',
    description: (
      <>
        LmcMail is an email service module that provides the ability to use the View Manager of a Laminas MVC
        application and the installed View Helper plugins to render HTML emails.
      </>
    ),
    href: 'https://lm-commons.github.io/LmcMail/',
  },
  {
    title: 'LmcRbac',
    description: (
      <>
        Role-based access control module to provide additional features on top of Zend\Permissions\Rbac
      </>
    ),
    href: 'https://lm-commons.github.io/LmcRbac/',
  },
  {
    title: 'LmcAdmin',
    description: (
      <>
        LmcAdmin Module for Laminas Framework
      </>
    ),
    href: '/docs/packages/lmc-admin/introduction',
  },
];

/*
const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Powered by React',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

 */

/*
function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}
*/

/*
function Package({title, description, href}) {
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

 */

function PackageCard({title, description, href}) {
  return (
    <div className={clsx('card-demo col col--4 margin-bottom--md')}>
      <div className="card shadow--md ">
        <div className="card__header text--center">
          <Heading as='h3'>{title}</Heading>
        </div>
        <div className="card__body">
          <p>
            {description}
          </p>
        </div>
        <div className="card__footer">
          <div className={styles.buttons}>
            <Link className="button button--primary" to={href}>Documentation</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {PackageList.map((props, idx) => (
            <>

            <PackageCard key={idx} {...props} />

            </>
          ))}
        </div>
      </div>
    </section>
  );
}
