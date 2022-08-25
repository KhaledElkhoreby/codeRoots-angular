export interface Slider {
  id: number;
  photo: string;
  created: string;
  modified: string;
  slider_seconds: number;
  sort: number;
  item_id: number;
  restaurant_id: number;
  approval: number;
  department_id: number;
  ads_position_price_id: number;
  total_cost: number;
  start_date: string;
  end_date: string;
  day_number: number;
  department_message: string;
  publish: number;
}

export interface AdsSpacesprice {
  id: number;
  positions: number;
  sliders: Slider;
}

export interface AdsInterface {
  data: AdsInterface;
  id: number;
  name: string;
  created: string;
  AdsSpacesprice: AdsSpacesprice[];
}
