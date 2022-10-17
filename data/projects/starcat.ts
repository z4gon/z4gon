import { ProjectData } from '../../src/models/ProjectData'
import generateProjectData from '../generateProjectData'
import { Tag } from '../tags'

const data: ProjectData = generateProjectData({
    id: 'starcat',
    date: '2022-7',
    thumbnailImageName: 'thumbnail.gif',
    imagesNames: [
        'screen-1.jpg',
        'screen-2.png',
        'screen-3.png',
        'screen-4.png',
        'screen-5.png',
        'screen-6.png',
    ],
    youtubeVideoIds: ['3EQ1cwSD_BY'],
    title: 'The Star Cat',
    subtitle: 'Published Mobile Game for iOS & Android',
    description: [
        'I am the solo indie developer on the project. Managed everything from conception, art & programming until deployment in AppStore and PlayStore.',
        'A stylish 2D Side-Scroller with a cat character that shoots a weapon. The player has to destroy enemies and avoid obstacles.',
        'The game is developed in Unity3D engine.',
    ],
    implementationDetails: [
        'Gameplay programming and behaviors for Unity with C#.',
        'Designing architecture for testability and reusability of systems.',
        'Dependency injection using Zenject.',
        'Game mechanics, enemy attacks with the command pattern and coroutines.',
        '2D Animations using Unity Animator / Mecanim.',
        'UI elements and animations.',
        'Optimization of sprite assets for reduced app bundle size, sprite atlases.',
        'Integrating audio assets from the Asset Store, working with AudioSources and Mixers.',
        'Unity Ads, integrating the SDK and managing the Unity Ads dashboard configs.',
        'CI/CD with Unity Cloud Build and integrating with the APIs of PlayStore/AppStore for automated deploy of builds.',
        'Unit Tests for EditMode/PlayMode.',
        'TestFlight in the AppStore and internal testing tracks in the PlayStore.',
        'Production deploy of apps in the PlayStore Console and the AppStore Connect.',
        'AssetBundles and LoadAsync for memory usage optimization.',
        'ScriptableObjects.',
    ],
    tags: [Tag.Unity3D, Tag.CSharp, Tag.iOS, Tag.Android, Tag.MobileGame],
    links: [
        {
            href: 'https://nochegames.com',
            text: 'Noche Games Website',
        },
    ],
    appleAppStoreUrl: 'https://apps.apple.com/us/app/the-star-cat/id1544668944',
    googlePlayStoreUrl:
        'https://play.google.com/store/apps/details?id=com.NightOwlGames.Starcat',
    isPrivateRepo: true,
    cardConfig: {
        backgroundSize: '100%',
        backgroundPosition: '-20px 0px',
        gradientColor: 'rgb(125, 0, 0)',
    },
})

export default data
