import os

# Image Generator
target = "app/core/utils/getAsset.ts"
path = "app/assets/images"

introMessage = "/* This file is generated automatically by generateAssets.py. Do not edit it manually. \nThe function getAsset() helps us to type our assets and avoid confusing require calls.\nThis is a wrapper for the base react native image handling => https://reactnative.dev/docs/images \nTo update please run `npm run generateAssets.ts`*/\n"
output = (
    introMessage
    + "import { ImageSourcePropType } from 'react-native'; export type AssetName ="
)


def containsAt(elm):
    return "@" not in elm


fileList = list(filter(containsAt, os.listdir(path)))

print(fileList)


for fileName in sorted(fileList):
    if ".png" in fileName:
        output = output + " | '" + fileName.replace(".png", "") + "'"

output = (
    output +
    ";export const assets: { [name in AssetName]: ImageSourcePropType } = {"
)
for fileName in sorted(fileList):
    if ".png" in fileName:
        output = (
            output
            + " '"
            + fileName.replace(".png", "")
            + "': require('../../assets/images/"
            + fileName
            + "'),"
        )
output = (
    output
    + "};export default function getAsset(name: AssetName) {  return assets[name];}"
)
print(output)
f = open(target, "w")
f.write(output)
f.close()

# SVG Generator
target = "app/core/components/IconSVG.tsx"
path = "app/assets/svgs"
introMessage = "/* This component is generated automatically by generateAssets.py. Do not edit it manually. \nThe component getAsset() helps us to use our theme on the svgs and make importing easier.\nTo update please run `npm run generateAssets.ts`*/\n"
output = (
    introMessage
    + "import { colors } from '../../styles/colors'; import React from 'react'; import { SvgProps } from 'react-native-svg';"
)
fileList = list(os.listdir(path))
print(fileList)
importSection = ""
typeSection = "export type SVGName = "
svgObject = "const svgs: { [name: string]: React.FC<SvgProps & { primary?: string | undefined; secondary?: string | undefined;}>;} = {"
for fileName in sorted(fileList):
    if ".svg" in fileName:
        nameUpper = list(fileName.replace(".svg", ""))
        nameUpper[0] = nameUpper[0].upper()
        nameUpper = "".join(nameUpper)
        typeSection += " | '" + nameUpper + "'"
        importSection += (
            "import " + nameUpper + " from '../../assets/svgs/" + fileName + "';"
        )
        svgObject += " " + nameUpper + ": " + nameUpper + ","
output += (
    importSection + "\n\n" + typeSection + "; " + "\n\n" + svgObject + "};" + "\n\n"
)

output += "export type IconProps = { name: SVGName; primaryColor?: string; secondaryColor?: string; } & SvgProps;\n\n export const IconSVG = (props: IconProps) => {const {name, primaryColor, secondaryColor} = props; const Icon = svgs[name]; return ( <Icon {...props} primary={primaryColor ?? colors.primary} secondary={secondaryColor ?? colors.medium}/>);};"
print(output)
f = open(target, "w")
f.write(output)
f.close()