import { Category } from '../../src/models/enums/Category'
import { Tag } from '../../src/models/enums/Tag'
import { Technology } from '../../src/models/enums/Technology'
import { ProjectData } from '../../src/models/ProjectData'
import generateProjectData from '../generateProjectData'

const data: ProjectData = generateProjectData({
    id: 'ui-stars-fireworks-vfx-unity',
    date: '2022-11',
    videosNames: ['8.mp4'],
    imagesNames: [
        '9.jpg',
        '11.jpg',
        '10.jpg',
        '4.jpg',
        '7.jpg',
        '6.jpg',
        '5.jpg',
        '3.jpg',
        '2.jpg',
        '1.jpg',
    ],
    youtubeVideoIds: ['lmJEb4jdH2Q'],
    title: 'Stars and Fireworks UI VFX',
    subtitle: 'Implemented with Shuriken Particle System in Unity',
    implementationDetails: [
        'Designing the concept in Affinity Photo, to use the sprites and as reference in Unity.',
        'Using the UI Particle package by Mob-Sakai, to be able to render Particle Systems in the UI using BakeMesh/BakeTrailMesh.',
        'Shader for additive Rainbow effect on the Light Rays',
        'Additive Glow Effect',
        'UI Particle System for Stars coming out from behind the sign, using an Additve Shader',
        'UI Particle System for the Fireworks',
        'Using Trails to render the trails of the fireworks rockets and debris',
        'Sub Emitters to render explosion and debris coming out of the explosion',
        'Color Over Time, Size Over Time, Force Over Time',
        'Emission Shapes and Emission Bursts',
    ],
    tags: [Tag.VFX, Tag.UI, Tag.BuiltInRP],
    technology: Technology.UnityEngine,
    category: Category.VisualEffects,
})

export default data
