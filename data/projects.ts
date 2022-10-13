import { ProjectData } from '../src/models/ProjectData'

import ballOfLavaShaderUnity from './projects/ball-of-lava-shader-unity'
import cgPerlinNoiseShaderUnity from './projects/cg-perlin-noise-shader-unity'
import cgShapingShadersUnity from './projects/cg-shaping-shaders-unity'
import cgTextureShadersUnity from './projects/cg-texture-shaders-unity'
import fireVfxUnity from './projects/fire-vfx-unity'
import groundSlashVfxUnity from './projects/ground-slash-vfx-unity'
import iceAttackVfxUnity from './projects/ice-attack-vfx-unity'
import starcat from './projects/starcat'
import waterShaderUnity from './projects/water-shader-unity'

const pinned: ProjectData[] = [
    ballOfLavaShaderUnity,
    cgPerlinNoiseShaderUnity,
    groundSlashVfxUnity,
    iceAttackVfxUnity,
    fireVfxUnity,
    waterShaderUnity,
]
const publishedGames: ProjectData[] = [starcat]
const other: ProjectData[] = [cgTextureShadersUnity, cgShapingShadersUnity]

const projects = [...pinned, ...publishedGames, ...other]

export default projects
