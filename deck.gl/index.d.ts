/**
 * This file only exists because deck.gl does not provide typings files and the ones that exist on
 * the internet are pretty busted. This is a very small subset of things exposed in deck.gl and
 * is only here to allow us to use deck.gl with a baseline of typing support.
 */
declare module 'deck.gl' {
	import React from 'react';

	export interface DeckGLProps {
		[key: string]: any;
	}

	export default class DeckGL extends React.Component<DeckGLProps> {}

	/**
	 * @see https://github.com/uber/deck.gl/blob/master/docs/developer-guide/interactivity.md#the-picking-info-object
	 */
	export interface PickingInfo<T = any> {
		layer: Layer<T>;
		index: number;
		object?: T;
		x: number;
		y: number;
		coordinate: any;
	}

	/**
	 * @see https://github.com/uber/deck.gl/blob/master/docs/api-reference/layer.md
	 */
	export interface LayerProps<T = any> {
		[key: string]: any;
		id?: string;
		visible?: boolean;
		opacity?: number;
		pickable?: boolean;
		onHover?: (info: PickingInfo<T>, event: Event) => boolean | void;
		onClick?: (info: PickingInfo<T>, event: Event) => boolean | void;
		onDragStart?: (info: PickingInfo<T>, event: Event) => boolean | void;
		onDrag?: (info: PickingInfo<T>, event: Event) => boolean | void;
		onDragEnd?: (info: PickingInfo<T>, event: Event) => boolean | void;
		highlightColor?: number[];
		highlightedObjectIndex?: number;
		autoHighlight?: boolean;
		getPolygonOffset?: ({
			layerIndex
		}: {
			layerIndex: number;
		}) => [number, number];
	}

	/**
	 * @see https://github.com/uber/deck.gl/blob/master/docs/api-reference/layer.md
	 */
	export class Layer<T> {
		public constructor(props: LayerProps<T>);
		public props: T;
	}

	export class CompositeLayer<T> extends Layer<T> {
		public getSubLayerProps: (props: object) => object;
		public static defaultProps: object;
	}

	// https://github.com/uber/deck.gl/tree/master/docs/layers
	export class ArcLayer<T> extends CompositeLayer<T> {}
	export class BitmapLayer<T> extends CompositeLayer<T> {}
	export class ContourLayer<T> extends CompositeLayer<T> {}
	export class GeojsonLayer<T> extends CompositeLayer<T> {}
	export class GpuGridLayer<T> extends CompositeLayer<T> {}
	export class GridCellLayer<T> extends CompositeLayer<T> {}
	export class GridLayer<T> extends CompositeLayer<T> {}
	export class HexagonCellLayer<T> extends CompositeLayer<T> {}
	export class HexagonLayer<T> extends CompositeLayer<T> {}
	export class IconLayer<T> extends CompositeLayer<T> {}
	export class LineLayer<T> extends CompositeLayer<T> {}
	export class MeshLayer<T> extends CompositeLayer<T> {}
	export class PathLayer<T> extends CompositeLayer<T> {}
	export class PointCloudLayer<T> extends CompositeLayer<T> {}
	export class PolygonLayer<T> extends CompositeLayer<T> {}
	export class S2Layer<T> extends CompositeLayer<T> {}
	export class ScatterplotLayer<T> extends CompositeLayer<T> {}
	export class ScreenGridLayer<T> extends CompositeLayer<T> {}
	export class SolidPolygonLayer<T> extends CompositeLayer<T> {}
	export class TextLayer<T> extends CompositeLayer<T> {}
	export class TileLayer<T> extends CompositeLayer<T> {}
	export class TripsLayer<T> extends CompositeLayer<T> {}
}
