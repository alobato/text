import styled, { css } from 'styled-components'
import { space, display, style, fontSize, fontFamily, lineHeight, fontWeight, letterSpacing, verticalAlign } from 'styled-system'

export default styled('span')(
  display,
  space,
  fontSize,
  fontFamily,
  lineHeight,
  fontWeight,
  letterSpacing,
  verticalAlign,
  style({prop: 'fs', cssProperty: 'fontSize', transformValue: n => /^\d+$/.test(n) ? n + 'px': n}),
  style({prop: 'ff', cssProperty: 'fontFamily'}),
  style({prop: 'fw', cssProperty: 'fontWeight'}),
  style({prop: 'lh', cssProperty: 'lineHeight'}),
  props => props.uppercase && css`text-transform: uppercase;`,
  props => props.pointer && css`cursor: pointer;`,
  props => props.underline && css`text-decoration: underline;`,
  props => props.small && css`font-size: 20px;`,
  props => props.medium && css`font-size: 24px;`,
  props => props.large && css`font-size: 30px;`,
  props => props.extralarge && css`font-size: 42px;`,
  props => props.white && css`color: ${props => props.theme.colors.white};`,
  props => props.primary && css`color: ${props => props.theme.colors.primary};`,
  props => props.secondary && css`color: ${props => props.theme.colors.secondary};`,
  props => props.color && (props.color.includes('grey') || props.color.includes('primary')) && css`color: ${props => props.theme.colors[props.color]};`,
  props => props.css
)
