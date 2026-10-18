"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Field, FieldLabel } from "@/components/ui/field";
import Link from "next/link";

export default function Login() {
  return (
    <main className="m-auto flex flex-col items-center justify-center gap-20">
      <h1 className="bold text-4xl">Meninas Digitais Network</h1>
      <Card className="w-lg">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">Login</CardTitle>
          <CardDescription className="text-card-foreground">
            Faça login ou crie uma conta{" "}
            <Link
              href="/cadastro"
              className="underline text-blue-300 hover:text-blue-300/80"
            >
              aqui
            </Link>
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-6">
          <Field>
            <FieldLabel>E-mail</FieldLabel>
            <Input></Input>
          </Field>
          <Field>
            <FieldLabel>Senha</FieldLabel>
            <Input type="password"></Input>
          </Field>
        </CardContent>
        <CardFooter>teste</CardFooter>
      </Card>
    </main>
  );
}
