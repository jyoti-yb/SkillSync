import { Container, Typography, Box } from '@mui/material';
import JobCard from '../components/JobCard';

const jobs = [
  {
    id: 1, title: 'Full Stack Developer', company: 'Initech', budget: '$1200',
    skills: ['React', 'Node.js', 'MongoDB'], image: 'https://fastly.picsum.photos/id/20/3670/2462.jpg?hmac=CmQ0ln-k5ZqkdtLvVO23LjVAEabZQx2wOaT4pyeG10I'
  },
  {
    id: 2, title: 'Logo Designer', company: 'Designify', budget: '$200',
    skills: ['Illustrator', 'Branding'], image: 'https://fastly.picsum.photos/id/5/5000/3334.jpg?hmac=R_jZuyT1jbcfBlpKFxAb0Q3lof9oJ0kREaxsYV3MgCc'
  },
  {
    id: 3, title: 'Mobile App Developer', company: 'AppNest', budget: '$950',
    skills: ['Flutter', 'Firebase'], image: 'https://fastly.picsum.photos/id/7/4728/3168.jpg?hmac=c5B5tfYFM9blHHMhuu4UKmhnbZoJqrzNOP9xjkV4w3o'
  },
  {
    id: 4, title: 'Social Media Manager', company: 'ViralBuzz', budget: '$400',
    skills: ['Instagram', 'Analytics'], image: 'https://fastly.picsum.photos/id/378/5000/3333.jpg?hmac=Jh9hcCIe9-6cNIvJnO5d33CuAR-3RKeOMRx4ki5nKt8'
  },
  {
    id: 5, title: 'Backend Developer', company: 'CodeBase', budget: '$1100',
    skills: ['Express', 'SQL'], image: 'https://fastly.picsum.photos/id/366/4000/3000.jpg?hmac=zphhHOH9ofToN2jNHd8z-nc98NrBd8y2okWXEXetLDg'
  },
  {
    id: 6, title: 'WordPress Expert', company: 'SiteGuru', budget: '$600',
    skills: ['PHP', 'WordPress'], image: 'https://fastly.picsum.photos/id/252/5000/3281.jpg?hmac=43dQtOHPvmpknnjz0R6jenAi-V9OW6J8sVKUTVOpAaU'
  },
  {
    id: 7, title: 'Video Editor', company: 'ReelEdit', budget: '$350',
    skills: ['Adobe Premiere', 'After Effects'], image: 'https://fastly.picsum.photos/id/192/2352/2352.jpg?hmac=jN5UExysObV7_BrOYLdxoDKzm_c_lRM6QkaInKT_1Go'
  },
  {
    id: 8, title: 'Data Analyst', company: 'Insights Inc.', budget: '$750',
    skills: ['Python', 'Excel', 'PowerBI'], image: 'https://fastly.picsum.photos/id/26/4209/2769.jpg?hmac=vcInmowFvPCyKGtV7Vfh7zWcA_Z0kStrPDW3ppP0iGI'
  },
  {
    id: 9, title: 'Virtual Assistant', company: 'Supportly', budget: '$250',
    skills: ['Email', 'Scheduling'], image: 'https://fastly.picsum.photos/id/24/4855/1803.jpg?hmac=ICVhP1pUXDLXaTkgwDJinSUS59UWalMxf4SOIWb9Ui4'
  },
  {
    id: 10, title: 'SEO Specialist', company: 'RankRocket', budget: '$500',
    skills: ['SEO', 'Ahrefs'], image: 'https://fastly.picsum.photos/id/391/2980/2151.jpg?hmac=Vm7g1uyLxiCTfcFr1aXyYGRwqi7LMjpXzkatkqekPGQ'
  },
  {
    id: 11, title: 'UX/UI Designer', company: 'PixelCraft', budget: '$800',
    skills: ['Figma', 'User Research'], image: 'https://fastly.picsum.photos/id/411/5000/2358.jpg?hmac=YjkATffpMa8rh663_FXDsGY0W-Y0hAPfqpjXZoP65hQ'
  },
  {
    id: 12, title: 'AI Prompt Engineer', company: 'FutureFlow', budget: '$950',
    skills: ['ChatGPT', 'Prompt Tuning'], image: 'https://fastly.picsum.photos/id/431/5000/3334.jpg?hmac=T2rL_gBDyJYpcr1Xm8Kv7L6bhwvmZS8nKT5w3ok58kA'
  },
  {
    id: 13, title: 'Technical Writer', company: 'DocuPro', budget: '$300',
    skills: ['Markdown', 'Documentation'], image: 'https://fastly.picsum.photos/id/435/1200/800.jpg?hmac=NRHmYJ-8T18f_jUu_zGUaS4pmJJW2baw-isXTEPVt7U'
  },
  {
    id: 14, title: 'Cybersecurity Analyst', company: 'SecureStack', budget: '$1000',
    skills: ['SIEM', 'Nmap', 'Wireshark'], image: 'https://fastly.picsum.photos/id/464/3198/2230.jpg?hmac=PvWYTRxxxpPyuU2k_p7abQZAF584A6poZ0lH12q-k6w'
  },
  {
    id: 15, title: 'Cloud Engineer', company: 'CloudCore', budget: '$1250',
    skills: ['AWS', 'Terraform'], image: 'https://source.unsplash.com/featured/?cloud'
  },
  {
    id: 16, title: 'Marketing Copywriter', company: 'AdBlitz', budget: '$450',
    skills: ['Copywriting', 'Sales'], image: 'https://source.unsplash.com/featured/?marketing'
  },
  {
    id: 17, title: 'E-commerce Manager', company: 'ShopZone', budget: '$700',
    skills: ['Shopify', 'Inventory'], image: 'https://source.unsplash.com/featured/?ecommerce'
  },
  {
    id: 18, title: '3D Animator', company: 'PixelMotion', budget: '$950',
    skills: ['Blender', 'Maya'], image: 'https://source.unsplash.com/featured/?animation'
  },
  {
    id: 19, title: 'Financial Consultant', company: 'WealthWise', budget: '$650',
    skills: ['Finance', 'Excel'], image: 'https://source.unsplash.com/featured/?finance'
  },
  {
    id: 20, title: 'Python Scripting Expert', company: 'AutoFlow', budget: '$850',
    skills: ['Python', 'Automation'], image: 'https://source.unsplash.com/featured/?python'
  }
];

export default function Dashboard() {
  return (
    <Container sx={{ pt: 10 }}>
      <Typography variant="h4" gutterBottom>Available Jobs</Typography>

      <Box
        display="flex"
        flexWrap="wrap"
        gap={3}
        justifyContent="flex-start"
      >
        {jobs.map(job => (
          <Box
            key={job.id}
            flex="1 1 45%"
            minWidth="300px"
            maxWidth="500px"
          >
            <JobCard job={job} />
          </Box>
        ))}
      </Box>
    </Container>
  );
}