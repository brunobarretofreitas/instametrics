import React, { useState } from 'react';
import useInterval from '@use-it/interval';
import axios from 'axios';

import homeIllustration from 'assets/social_girl.svg';
import { faSearch, faSpinner, faTimes } from '@fortawesome/free-solid-svg-icons';

import Colors from 'styles/colors';

import InstagramParser from 'utils/instagramParser';

import { 
  HomeContainer, HomeHeader,
  HomeContent, HomeContentImg, 
  HomeText 
} from './style';

import Input, { 
  InputGroup, InputIcon 
} from 'components/Input';

export default () => {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [searchError, setSearchError] = useState(false);

  const updateUserInfo = (username) => {
    setSearchError(false);
    
    axios.get(
      `https://instagram.com/${username}`
    ).then(response => {
      const userFollowers = InstagramParser.getUserInfo(username, response.data);
      setUserInfo(userFollowers);
    }).catch(error => {
      setSearchError(true);
    }).finally(() => {
      setLoading(false);
    });
  }

  useInterval(() => {
    if (userInfo) {
      updateUserInfo(userInfo.username);
    }
  }, 5000);

  const findInstagramUser = (event) => {
    event.preventDefault();

    if (search) {
      setLoading(true);
      updateUserInfo(search);
    }
  }

  const getInputIcon = () => {
    if (loading) {
      return (
        <InputIcon 
          color={Colors.iconColor}
          icon={ faSpinner } spin />
      )
    } else if (searchError) {
      return (
        <InputIcon 
          color={Colors.errorColor}
          icon={ faTimes }/>
      );
    } else {
      return (
        <InputIcon 
          color={Colors.iconColor}
          icon={ faSearch } />
      )
    }
  }

  return (
    <HomeContainer>
      <HomeHeader>
        <form onSubmit={ findInstagramUser }>
          <InputGroup>
            <Input
              onChange={(event) => setSearch(event.target.value)}
              type='text' 
              autoFocus={true} 
              placeholder='username ex: neymarjr' />
            { getInputIcon() }
          </InputGroup>
        </form>
      </HomeHeader>
      <HomeContent>
        <HomeContentImg src={homeIllustration} />
        { userInfo ? 
            <>
              <HomeText>@{userInfo.username}</HomeText>
              <HomeText>{userInfo.userFollowers}</HomeText>
            </>
          :
            <HomeText>How popular are you ?</HomeText>
        }
      </HomeContent>
    </HomeContainer>
  );
}