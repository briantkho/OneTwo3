import React from 'react';
import { createClient } from '../../utils/supabase-server';

const getData = async () => {
  const supabase = createClient();
  const user = await supabase.auth.getUser();
  let { data, error, status } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.data.user?.id)
    .single();

  if (error && status !== 406) {
    throw error;
  }
  return data;
};

export default async function GetUser() {
  const user = await getData();

  return <div>Hello, {user.first_name}!</div>;
}
