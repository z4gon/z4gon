import { ProjectData } from '../src/models/ProjectData'

const projects: ProjectData[] = [
    {
        id: 'water-shader-unity',
        date: '2022-7',
        thumbnailUrl: '/images/portfolio/water-shader-unity/cliff.gif',
        metaImageUrl: '/images/portfolio/water-shader-unity/cliff.gif',
        imagesUrls: [
            '/images/portfolio/water-shader-unity/cliff.gif',
            '/images/portfolio/water-shader-unity/lake.gif',
            '/images/portfolio/water-shader-unity/water_waves.gif',
            '/images/portfolio/water-shader-unity/water_depth_colored.gif',
            '/images/portfolio/water-shader-unity/water_depth_refracted.gif',
            '/images/portfolio/water-shader-unity/water_refraction.gif',
            '/images/portfolio/water-shader-unity/water_foam.gif',
            '/images/portfolio/water-shader-unity/water_depth.gif',
            '/images/portfolio/water-shader-unity/water_colors.gif',
        ],
        youtubeVideoId: '6VaHBkttvSE',
        title: 'Water Shader',
        subtitle: 'With Shader Graph in Unity',
        description: [
            'Water shader with dynamic configurations, which can simulate several environmental effects.',
        ],
        bullets: [
            'Water depth effect using Scene Depth node (Camera Depth Buffer) and Screen Position node (Fragment Position)',
            'Refractions using Screen Color node to render distorted objects behind the water, using Normals generated from height from a gradient noise.',
            'Foam generated using the Scene Depth node and a gradient noise.',
            'Waves achieved with geometry displacement, adding Normals multiplied by a gradient noise, effectively deforming the fragment geometry.',
        ],
        tags: ['Unity3D', 'VFX', 'Shader Graph'],
        links: [
            {
                href: 'https://github.com/z4gon/water-shader-unity',
                text: 'View on GitHub',
            },
        ],
    },
    {
        id: 'starcat',
        date: '2022-7',
        thumbnailUrl: '/images/portfolio/starcat/thumbnail.gif',
        metaImageUrl: '/images/portfolio/starcat/meta.png',
        imagesUrls: [
            '/images/portfolio/starcat/screen-1.jpg',
            '/images/portfolio/starcat/screen-2.png',
            '/images/portfolio/starcat/screen-3.png',
            '/images/portfolio/starcat/screen-4.png',
            '/images/portfolio/starcat/screen-5.png',
            '/images/portfolio/starcat/screen-6.png',
        ],
        youtubeVideoId: '3EQ1cwSD_BY',
        title: 'The Star Cat',
        subtitle: 'Published Mobile Game for iOS & Android',
        description: [
            'I am the solo indie developer on the project. Managed everything from conception, art & programming until deployment in AppStore and PlayStore.',
            'A stylish 2D Side-Scroller with a cat character that shoots a weapon. The player has to destroy enemies and avoid obstacles.',
            'The game is developed in Unity3D engine.',
        ],
        bullets: [
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
        tags: ['Unity3D', 'C#', 'iOS', 'Android', 'Mobile Game'],
        links: [
            {
                href: 'https://nochegames.com',
                text: 'Noche Games Website',
            },
        ],
        appleAppStoreUrl:
            'https://apps.apple.com/us/app/the-star-cat/id1544668944',
        googlePlayStoreUrl:
            'https://play.google.com/store/apps/details?id=com.NightOwlGames.Starcat',
    },
]

export default projects
