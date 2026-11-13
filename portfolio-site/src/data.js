const B = import.meta.env.BASE_URL;
export const projects = [
  { img: 'p1.png', title: 'Udemy Course Recommender', tag: 'Streamlit · Python · PostgreSQL', desc: 'End-to-end pipeline for 3,600+ courses with a TF-IDF recommender and an analytics dashboard.', url: 'https://udemy-courses-recommendation-system.streamlit.app/' },
  { img: 'p2.jpg', title: 'Finnova Finance Training App', tag: 'Flutter · Real-time data', desc: 'Finance learning app with live market data, calculators and a paper-trading feature.', url: 'https://github.com/Whirls19/Finnova' },
  { img: 'p3.png', title: 'Jobs Search Analysis', tag: 'SQL · PostgreSQL', desc: 'Advanced SQL on 2023 job postings to find in-demand skills and hiring trends.', url: 'https://github.com/Whirls19/SQL-Jobs-Search-Project' },
  { img: 'p4.png', title: 'Airplanes vs Wildlife', tag: 'Tableau', desc: 'U.S. wildlife strike data: incident frequency, damage and trends over time.', url: 'https://public.tableau.com/app/profile/aman.rukhsar/viz/AirplanesVs_Wildlife/Dashboard1' },
  { img: 'p5.png', title: 'NYC Tree Census', tag: 'Tableau', desc: 'Interactive dashboards on species diversity, tree health and geography.', url: 'https://public.tableau.com/app/profile/aman.rukhsar/viz/TreesNYC_17580032183300/Dashboard' },
  { img: 'p6.png', title: 'Nashville Housing Cleaning', tag: 'SQL Server', desc: 'Standardised dates, filled missing addresses, split fields and removed duplicates.', url: 'https://github.com/Whirls19/Nashville-Housing-Data-Cleaning-and-Analysis' },
  { img: 'p7.png', title: 'COVID-19 Vaccination Analysis', tag: 'SQL Server', desc: 'Coverage metrics and trends using aggregation, cleaning and integrity checks.', url: 'https://github.com/Whirls19/COVID-19-Vaccination-Data-Analysis' },
  { img: 'p8.png', title: 'Customer Churn Analysis', tag: 'Python · Pandas · Seaborn', desc: 'EDA on telecom churn data to find the factors behind customer retention.', url: 'https://github.com/Whirls19/Customer-Churn-Analysis' }
];
export const items = projects.map(p => ({ src: `${B}projects/${p.img}`, alt: p.title, title: p.title, subtitle: p.tag }));
export const skills = ['Python', 'SQL', 'PostgreSQL', 'Power BI', 'Tableau', 'Looker Studio', 'Grafana', 'Excel', 'Streamlit', 'Machine Learning', 'Deep Learning', 'Web Scraping', 'Flutter'];
