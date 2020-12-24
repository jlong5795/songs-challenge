import gql from 'graphql-tag';

module.exports = gql`
  scalar Date

  type PageInfo {
    per_page: Int
    current_page: Int
    total: Int
    has_more: Boolean!
  }

  type Song {
    track_id: ID!
    track_name: String!
    track_artist: String!
    track_popularity: Int!
    track_album_id: ID!
    track_album_name: String!
    track_album_release_date: Date!
    playlist_name: String!
    playlist_id: String!
    playlist_genre: String
    playlist_subgenre: String
    danceability: Float!
    energy: Float!
    key: Int!
    loudness: Float!
    mode: Boolean!
    speechiness: Float!
    acousticness: Float!
    instrumentalness: Float!
    liveness: Float!
    valence: Float!
    tempo: Float!
    duration_ms: Int!
    album_cover_art_url: String
  }

  type SongsList {
    songs: [Song!]!
    pageInfo: PageInfo!
  }

  type Query {
    Songs(page: Int!, search: String): SongsList!
  }
`;
