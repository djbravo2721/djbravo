import React from "react";
import { useOverrides, Override } from "@quarkly/components";
import { Text, Strong, Section } from "@quarkly/widgets";
const defaultProps = {
	"padding": "60px 0",
	"sm-padding": "40px 0",
	"background": "--color-secondary",
	"display": "flex",
	"flex-direction": "column"
};
const overrides = {
	"text": {
		"kind": "Text",
		"props": {
			"as": "h1",
			"margin": "0px",
			"font": "--headline1",
			"md-font": "--headline2",
			"color": "--dark",
			"width": "50%",
			"md-width": "100%",
			"md-margin": "0px 0px 16px 0px",
			"children": "PeerRides"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"margin": "16px 0px 0px 0px",
			"max-width": "260px",
			"width": "30%",
			"font": "--headline3",
			"color": "--dark",
			"md-width": "100%",
			"display": "block",
			"children": <Strong
				overflow-wrap="normal"
				word-break="normal"
				white-space="normal"
				text-indent="0"
				text-overflow="clip"
				hyphens="manual"
				user-select="auto"
				pointer-events="auto"
			>
				The rides for Community
			</Strong>
		}
	}
};

const Headline = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Override slot="SectionContent" flex-direction="row" justify-content="space-between" md-flex-direction="column" />
		<Text {...override("text")} />
		<Text {...override("text1")} />
		{children}
	</Section>;
};

Object.assign(Headline, { ...Section,
	defaultProps,
	overrides
});
export default Headline;