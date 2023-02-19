import { Category } from '../../src/models/enums/Category'
import { Tag } from '../../src/models/enums/Tag'
import { Technology } from '../../src/models/enums/Technology'

const data = {
    id: 'ice-attack-vfx-unity',
    date: '2022-9',
    videosNames: [
        '9.mp4',
        '8-waves.mp4',
        '7-snow-spike-vfx.mp4',
        '6-snow-mesh.mp4',
        '5-spikes.mp4',
        '4-spike-test.mp4',
        '3-dissolve-fresnel.mp4',
        '2-spike-mesh.mp4',
        '1-ground-textures.mp4',
    ],
    youtubeVideoIds: ['h4akS-e__9E'],
    title: 'Ice Attack VFX',
    subtitle: 'With VFX Graph and Shader Graph in Unity for URP',
    implementationDetails: [
        'Burst of 3 Delayed Waves utilizing Sub Graphs in VFX Graph.',
        'Ground Texture particles.',
        'Snow and Spike Meshes particles, with dissolve/fresnel shader.',
        'Utilize VFX Graph',
        'Random spawn position and rotation of particles.',
        'Spikes tilt angle increases in each wave of the burst, also fully configurable',
        'Configurable colors, fresnel power, particles size and count.',
        'Dissolve and Fresnel shader implemented in Shader Graph, and integrated into the particles of VFX Graph utilizing the option for support for VFX Graph',
        '3D Modeling in Blender.',
    ],
    tags: [Tag.VFXGraph, Tag.ShaderGraph, Tag.URP, Tag.Unity, Tag.VFX],
    technology: Technology.UnityEngine,
    category: Category.VisualEffects,
}

export default data
