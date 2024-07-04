import os
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

output += "type Props = { name: SVGName;color?: string;size?:number } & SvgProps;\n\n export const IconSVG = (props: Props) => {const {name, color, size} = props; const Icon = svgs[name]; return ( <Icon {...props} fill={color ?? colors.primary} width={size ?? 24} height={size ?? 24}/>);};"
print(output)
f = open(target, "w")
f.write(output)
f.close()