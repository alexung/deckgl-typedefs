// These are not final typings but some are better than none.
// If you ever run into TS errors when you _think_ you're using Deck.gl correctly,
// feel free to change this typedef!
declare module 'deck.gl' {
	import React from 'react';

	export type DeckGLProps = DeckProperties & {
		controller: null | false | any;
		children: any;
		[key: string]: any;
	};

	export class DeckGL extends React.Component<DeckGLProps> {}
	export default DeckGL;

	type DeckProperties = any;
	export class Deck {
		public constructor(props: DeckProperties);
	}

	type Color =
		| number[]
		| [number, number, number]
		| [number, number, number, number];
	type Item = any;
	type Event = any;
	export type PickingInfo = {
		layer: Layer;
		index: number;
		object: any;
		x: number;
		y: number;
		lngLat: [number, number];
		[key: string]: any;
	};
	type EventCallback<T> = (info: PickingInfo, event: Event) => void | boolean;

	type CommonLayerProps<T> = {
		id?: string;
		// leaving `any` in data for now since some layers don't in fact accept arrays (geojson)
		// let's fix that when we get to write per-layer prop types
		data?: Array<T> | Promise<Array<T>> | any;
		visible?: boolean;
		opacity?: number;
	};

	type LayerInteractionProps<T = any> = {
		pickable?: boolean;
		onHover?: EventCallback<T>;
		onClick?: EventCallback<T>;
		onDragStart?: EventCallback<T>;
		onDrag?: EventCallback<T>;
		onDragEnd?: EventCallback<T>;
		highlightColor?: Color;
		highlightedObjectIndex?: number;
		autoHighlight?: boolean;
	};

	type CoordinateSystemProps = {
		coordinateSystem?: number;
		coordinateOrigin?: [number, number];
		wrapLongitude?: boolean;
		modelMatrix?: number[];
	};

	type DataProps = {
		dataComparator?: any;
		numInstances?: number;
		updateTriggers?: any;
	};

	type RenderProps = {
		parameters?: any;
		getPolygonOffset?: (i: { layerIndex: number }) => [number, number];
		transitions?: any;
	};

	export type LayerProps<T> = CommonLayerProps<T> &
		LayerInteractionProps<T> &
		CoordinateSystemProps &
		DataProps &
		RenderProps & {
			// make it so that passing other props doesn't result in a type error
			// (at least until each layer gets its own types)
			[key: string]: any;
		};

	export class Layer<T = Item> {
		public static defaultProps: any;
		public constructor(props: LayerProps<T>);
		public props: LayerProps<T>;
		public state: any;
		public context: any;

		public initializeState(context?: any): void;
		public shouldUpdateState(params: any): boolean;
		public setState(state: any): void;
		public setModuleParameters(parameters: any): void;
		public updateState(params: any): void;
		public finalizeState(): void;

		public draw(params: any): void;
		public getPickingInfo(params: any): any;
		public getShaders(): any;

		public project(coordinates: number[]): number[];
		public unproject(pixels: number[]): number[];
	}

	export class CompositeLayer<T = Item> extends Layer<T> {
		public getSubLayerProps: (props: object) => object;
		public static defaultProps: object;
	}

	// https://github.com/uber/deck.gl/tree/master/docs/layers
	export class ArcLayer<T = any> extends CompositeLayer<T> {}
	export class BitmapLayer<T = any> extends CompositeLayer<T> {}
	export class ContourLayer<T = any> extends CompositeLayer<T> {}
	export class GeoJsonLayer<T = any> extends CompositeLayer<T> {}
	export class GpuGridLayer<T = any> extends CompositeLayer<T> {}
	export class GridCellLayer<T = any> extends CompositeLayer<T> {}
	export class GridLayer<T = any> extends CompositeLayer<T> {}
	export class HexagonCellLayer<T = any> extends CompositeLayer<T> {}
	export class HexagonLayer<T = any> extends CompositeLayer<T> {}
	export class IconLayer<T = any> extends CompositeLayer<T> {}
	export class LineLayer<T = any> extends CompositeLayer<T> {}
	export class MeshLayer<T = any> extends CompositeLayer<T> {}
	export class PathLayer<T = any> extends CompositeLayer<T> {}
	export class PointCloudLayer<T = any> extends CompositeLayer<T> {}
	export class PolygonLayer<T = any> extends CompositeLayer<T> {}
	export class S2Layer<T = any> extends CompositeLayer<T> {}
	export class ScatterplotLayer<T = any> extends CompositeLayer<T> {}
	export class ScreenGridLayer<T = any> extends CompositeLayer<T> {}
	export class SolidPolygonLayer<T = any> extends CompositeLayer<T> {}
	export class TextLayer<T = any> extends CompositeLayer<T> {}
	export class TileLayer<T = any> extends CompositeLayer<T> {}
	export class TripsLayer<T = any> extends CompositeLayer<T> {}

	export class FlyToInterpolator {}
	export class LinearInterpolator {}

	export class View {}
	export class MapView extends View {}
	export class FirstPersonView extends View {}
	export class ThirdPersonView extends View {}
	export class OrbitView extends View {}
	export class PerspectiveView extends View {}
	export class OrthographicView extends View {}

	export class Viewport {}
	export class WebMercatorViewport extends Viewport {}

	export class Controller {}
	export class MapController extends Controller {}

	export class AttributeManager {}
}
