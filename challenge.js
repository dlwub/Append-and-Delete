/*
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. STRING t
 *  3. INTEGER k
 */

function appendAndDelete(s, t, k) {
  const s_len = s.length, t_len = t.length;
  let len = Math.min(s_len, t_len);
  let toRemove = 0, toAdd = 0, matching = 0,  str = '';
  
  for(let i = 0; i < len; i++){
      if(s[i]!==t[i]){
          matching = i;
          break;
      }else if(i===len - 1){
          matching = len;
      }
  }
  toRemove = s_len - matching;
  toAdd = t_len - matching;
  if(s_len >= t_len && (toAdd + toRemove <= k)){
      str = 'Yes';
  }else if(s_len < t_len && ((k - (toAdd + toRemove))%2 === 0) ){
      str = 'Yes';
  }else {
      str = 'No';
  }   
  return str;
}