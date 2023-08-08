import { BsLinkedin, BsGithub, BsInstagram, BsArrowLeft } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'

import type { IconType } from 'react-icons'


export type Icon = IconType
export type ValidIcon = keyof typeof Icons

export const Icons = {
    'linkedIn': BsLinkedin,
    'github': BsGithub,
    'instagram': BsInstagram,
    'arrowLeft': BsArrowLeft,
    'mail': HiOutlineMail,
} as const

