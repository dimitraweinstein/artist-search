import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router';
import Artist from '../components/artists/Artist';
import { getArtistMusicById } from '../services/artistApiSearch';


