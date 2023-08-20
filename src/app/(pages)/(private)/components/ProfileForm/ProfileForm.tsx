import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@components/ui/form";
import { Input } from "@components/ui/input";
import { toast } from "@components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import pb from "@lib/consts/pocketbase.const";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const profileFormSchema = z.object({
  name: z.string({ required_error: "Nombre requerido." }),
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

type Props = {
  visible?: boolean;
  onHide: () => void;
};

const ProfileForm = ({ visible, onHide }: Props) => {
  const defaultValues: Partial<ProfileFormValues> = {
    name: pb.authStore.model?.name ?? "",
  };

  useEffect(() => {
    form.setValue("name", pb.authStore.model?.name);
  }, []);

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
  });

  const onSubmit = (data: ProfileFormValues) => {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  };

  return (
    <Dialog open={visible} onOpenChange={(open) => !open && onHide()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Editar Perfil</DialogTitle>
          <DialogDescription>Tu información personal</DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" {...field} />
                  </FormControl>
                  <FormDescription>
                    Este nombre se va a ver en tu perfil.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileForm;
