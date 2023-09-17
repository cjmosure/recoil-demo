import styled from "@emotion/styled";
import Button from "@mui/joy/Button";
import { useForm, Controller } from "react-hook-form";
import Input from "@mui/joy/Input";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { Project, projectTags, projectsState } from "./projects.state";
import Textarea from "@mui/joy/Textarea";
import { Autocomplete } from "@mui/joy";

type FormData = {
  projectName: string;
  projectDescription: string;
  tags: ({ label: string; value: string } | string)[];
};

const CreateProjectWrapper = styled.div``;

const CreateProject = () => {
  const setProjects = useSetRecoilState(projectsState);
  const tags = useRecoilValue(projectTags);

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    setProjects((prevProjects: Project[]) => {
      return [
        ...prevProjects,
        {
          name: data.projectName,
          status: "active",
          tags: data.tags.map((tag) => {
            if (typeof tag === "string") {
              return tag;
            }
            return tag.value;
          }),
          description: data.projectDescription,
        },
      ];
    });
    reset();
  };

  return (
    <CreateProjectWrapper>
      <h3>Create Project</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="projectName"
          defaultValue=""
          rules={{
            required: true,
          }}
          render={({ field }) => (
            <Input {...field} placeholder="Project Name" sx={{ mb: 2 }} />
          )}
        />
        {errors.projectName && <span>This field is required</span>}
        <Controller
          control={control}
          name="projectDescription"
          defaultValue=""
          rules={{
            required: true,
          }}
          render={({ field }) => (
            <Textarea
              {...field}
              placeholder="Project Description"
              minRows={2}
              sx={{ mb: 2 }}
            />
          )}
        />
        <Controller
          control={control}
          name="tags"
          defaultValue={[]}
          rules={{
            required: true,
          }}
          render={({ field }) => (
            <Autocomplete
              {...field}
              onChange={(_, data) => {
                field.onChange(data);
              }}
              multiple
              freeSolo
              placeholder="Tags"
              options={tags.map((tag) => ({ label: tag, value: tag }))}
            />
          )}
        />
        <Button type="submit" sx={{ mt: 2, width: "100%" }}>
          Create Project
        </Button>
      </form>
    </CreateProjectWrapper>
  );
};

export default CreateProject;
