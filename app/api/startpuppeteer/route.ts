import { NextApiRequest, NextApiResponse } from 'next';
import { startYouTubeMacro } from '../../../utils/puppeteerHelper';
import { NextRequest, NextResponse } from 'next/server';

//const search = async (req: NextApiRequest, res: NextApiResponse) => {
  export async function POST(req: NextRequest, res:NextResponse) {
  if (req.method === 'POST') {
    try {
      await startYouTubeMacro();
      return NextResponse.json({message:'Macro started successfully!'});//res.json({ message: 'Macro started successfully!' });
    } catch (error) {
      return NextResponse.json({error:'Failed to start the macro'});//return res.status(500).json({ error: 'Failed to start the macro' });
    }
  } else {
    return NextResponse.json({error: 'Method not allowed'});//return res.status(405).json({ error: 'Method not allowed' });
  }
};

//export default search;
