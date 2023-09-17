import styled from "@emotion/styled";
import { useRecoilValue } from "recoil";
import { Project, projectsState } from "./projects.state";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import { Box, Chip, Sheet } from "@mui/joy";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Card variant="outlined" orientation="horizontal" sx={{ mb: 4 }}>
      <CardContent>
        <Typography level="title-md">{project.name}</Typography>
        <Typography>{project.description}</Typography>
        <Sheet sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ flex: 1 }}>
            {project.tags.map((tag: string) => (
              <Chip key={tag} size="sm" variant="solid" sx={{ mr: 1 }}>
                {tag}
              </Chip>
            ))}
          </Box>
          <Box>
            <Button
              variant="solid"
              size="md"
              color="primary"
              sx={{ ml: "auto", alignSelf: "center", fontWeight: 600 }}
            >
              Explore
            </Button>
          </Box>
        </Sheet>
      </CardContent>
    </Card>
  );
};

const ProjectListWrapper = styled.div`
  margin-bottom: 2rem;
`;

const ProjectList = () => {
  const projects = useRecoilValue(projectsState);

  return (
    <ProjectListWrapper>
      <h3>Projects:</h3>
      {projects.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </ProjectListWrapper>
  );
};

export default ProjectList;
