export interface HightlitedResultItem {
  value: string;
  matchLevel: string;
  matchedWords: string[];
}

export interface HightlitedResult {
  title: HightlitedResultItem;
  url: HightlitedResultItem;
  author: HightlitedResultItem;
}

export interface Story {
  created_at: string;
  title: string;
  url: string;
  author: string;
  points: number;
  story_text: string;
  comment_text: string;
  num_comments: number;
  story_id: number;
  story_title: string;
  story_url: string;
  parent_id: number;
  created_at_i: number;
  _tags: string[];
  objectID: number;
  _highlightResult: HightlitedResult;
}
