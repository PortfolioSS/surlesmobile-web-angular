import { Injectable } from '@angular/core';
import { Amplify } from 'aws-amplify';
import { signInWithRedirect, signOut, fetchAuthSession } from 'aws-amplify/auth';
import { environment } from '../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(){ Amplify.configure({ Auth: environment.auth }); }
  login(){ return signInWithRedirect(); }
  logout(){ return signOut(); }
  async token(){ return (await fetchAuthSession()).tokens?.accessToken?.toString() ?? null; }
  async canWrite(){
    const id = (await fetchAuthSession()).tokens?.idToken?.payload as any;
    const groups: string[] = id?.['cognito:groups'] || [];
    const scope = (await fetchAuthSession()).tokens?.accessToken?.payload?.scope as string | undefined;
    const scopes = scope?.split(' ') || [];
    return groups.includes('admin') || groups.includes('editor') || scopes.includes('portfolio/write');
  }
}
