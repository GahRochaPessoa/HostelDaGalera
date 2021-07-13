// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

/* export default (req, res) => {
  res.status(200).json({ name: 'John Doe' })
}
 */
import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:8000',
});
