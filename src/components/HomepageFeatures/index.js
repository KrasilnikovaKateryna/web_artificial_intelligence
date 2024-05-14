import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
    {
        title: 'Neural Networks',
        Svg: require('@site/static/img/bitconnect-svgrepo-com.svg').default,
        description: (
            <>
                Early work with neural networks stirs excitement for “thinking machines.”
            </>
        ),
    },
    {
        title: 'Machine Learning',
        Svg: require('@site/static/img/cloud-network-svgrepo-com.svg').default,
        description: (
            <>
                Machine learning becomes popular.
            </>
        ),
    },
    {
        title: 'Present Day',
        Svg: require('@site/static/img/chip-svgrepo-com.svg').default,
        description: (
            <>
                Generative AI, a disruptive tech, soars in popularity.
            </>
        ),
    },
];

function Feature({Svg, title, description}) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img"/>
            </div>
            <div className="text--center padding-horiz--md">
                <Heading as="h3">{title}</Heading>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
                <div className="row">
                    <div className="col col--12">
                        <div className="text--center padding-horiz--md">
                            <Heading as="h1">Why is artificial intelligence important?</Heading>
                            <p>
                                AI automates repetitive learning and discovery through data. Instead of automating manual tasks, AI performs frequent, high-volume, computerized tasks. And it does so reliably and without fatigue. Of course, humans are still essential to set up the system and ask the right questions.

                                AI adds intelligence to existing products. Many products you already use will be improved with AI capabilities, much like Siri was added as a feature to a new generation of Apple products. Automation, conversational platforms, bots and smart machines can be combined with large amounts of data to improve many technologies. Upgrades at home and in the workplace, range from security intelligence and smart cams to investment analysis.

                                AI adapts through progressive learning algorithms to let the data do the programming. AI finds structure and regularities in data so that algorithms can acquire skills. Just as an algorithm can teach itself to play chess, it can teach itself what product to recommend next online. And the models adapt when given new data.

                                AI analyzes more and deeper data using neural networks that have many hidden layers. Building a fraud detection system with five hidden layers used to be impossible. All that has changed with incredible computer power and big data. You need lots of data to train deep learning models because they learn directly from the data.

                                AI achieves incredible accuracy through deep neural networks. For example, your interactions with Alexa and Google are all based on deep learning. And these products keep getting more accurate the more you use them. In the medical field, AI techniques from deep learning and object recognition can now be used to pinpoint cancer on medical images with improved accuracy.

                                AI gets the most out of data. When algorithms are self-learning, the data itself is an asset. The answers are in the data – you just have to apply AI to find them. Since the role of the data is now more important than ever, it can create a competitive advantage. If you have the best data in a competitive industry, even if everyone is applying similar techniques, the best data will win. But using that data to innovate responsibly requires trustworthy AI. And that means your AI systems should be ethical, equitable and sustainable.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
